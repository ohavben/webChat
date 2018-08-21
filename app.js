'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const port = process.argv[2] || 8000;

const server = http.createServer((req, res) => {
   
    const parsedUrl = url.parse(req.url);
    let pathname = `.${parsedUrl.pathname}`;
    const mimeType = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',       
        '.json': 'application/json',
        '.mjs': 'text/javascript'
    };

    fs.exists(pathname, (exist) => {
        if(!exist) {
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }
        if (fs.statSync(pathname).isDirectory()) {
            pathname += '/index.html';
        }
        fs.readFile(pathname, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                const ext = path.parse(pathname).ext;
                res.setHeader('Content-type', mimeType[ext] || 'text/plain' );//'Cache-Control': 'no-cache'
                //res.setHeader('Cache-Control', 'max-age=0');
                res.end(data);
            }
        });
    });
});

server.listen(port, () => {
    console.log((new Date()) +  `Server is listening on port ${port} `);
});


const mongoHandler = require('./mongoHandler.js');
const App = new mongoHandler('mongodb://localhost:27017/', 'Carousel', { useNewUrlParser: true, bufferCommands: false });
const WebSocket = require('ws').Server;
const wss = new WebSocket({ server: server });

wss.broadcast = (message , users , sender) => 
    Array.from(wss.clients)  // transforming wss.clients which is a set into an array 
    .filter(client => client.user_id !== sender) // filtering the original sender
    .filter(client => client.readyState == 1) // filtering closed sockets
    .filter(client => users.map(userId => String(userId)).includes(String(client.user_id))) //checking if the user (socket) is in the chat
    .forEach(client =>  client.send(JSON.stringify(message)))


wss.on('connection', (ws, req) => {
    console.log(`new connection from domain ${req.headers.host}`)

    ws.on('disconnect', () => deleteUser(ws.user_id , ws.userName));
     
    ws.on('close', () => deleteUser(ws.user_id , ws.userName));

    ws.on('message', (message) => {
        
        let msg;

        try { 
            msg = JSON.parse(message)
        }
        catch(err) { return console.log('message cant be parsed and is ignored ' ,err) } 
        
        switch(msg.type){

            case 'register new user': 
            return App.createUser(msg.data)
                .then((res) => {
                    
                    ws.user_id = res.user._id;
                    ws.userName = res.user.userName;
                    ws.sw_clientID = msg.data.client_id
            
                    ws.send(JSON.stringify({
                        type:'registration successful',
                        user: res.user,
                        chat: res.chat,
                        client_id: ws.sw_clientID
                    }));
                    console.log(`new user: ${res.user._id} on ${res.chat._id} / ${wss.clients.size} `)
            
                    return wss.broadcast({
                        type:'new user joined chat',
                        user:res.user,
                        client_id: ws.sw_clientID
                    } , res.chat.users , res.user._id)
            
                })
                .catch((err) => console.log(`user not created` , err))

            case 'search for chats': 
            return App.search_for_chats(message.data.search)
                .then((chats) => ws.send(JSON.stringify({
                    type:'search for chat returns',
                    data: chats
                })))
                .catch((err)=>console.log('Error: ',err));

            case 'new text message': 
            return App.get_chat_by_id(message.data.chat_id) 
                .then((chat) => wss.broadcast({ 
                    type: 'incoming text message',
                    msg: message 
                } , chat.users , message.from.user_id))
                .catch((err)=>console.log('Error: ',err));

            case 'crate new chat': 
            return App.createChat(message.data.params)
                .then((chat) => ws.send(JSON.stringify({
                    type:'new chat created',
                    chat: chat
                })))
                .catch((err)=>console.log('Error: ',err));

            case 'delete chat': 
            return App.delete_Chat(message.data.chat_id)
                .then((chat)=> {
                    ws.send(JSON.stringify({
                        type:'chat deleted',
                        chat: chat.id
                    }));

                    return wss.broadcast({ 
                        type: 'chat deleted',
                        msg: chat.id 
                    } , chat.users , message.from.user_id)
                }).catch((err)=>console.log('Error: ',err));

            case 'join chat': 
            return App.join_chat(message.data.chat._id, ws.user_id)
                .then((response) => {

                    ws.send(JSON.stringify({ type: 'you joined chat', data:{ chat: response }}));

                    return wss.broadcast({ 
                        type: 'user joined chat',
                        id: ws.user_id, 
                        userName: ws.userName
                    } , response.chat.users , message.from.user_id);
                })
                .catch((err) => console.log('ERROR: user didnt join chat ' , err))

            case 'leave chat': 
            return App.leave_chat(message.data.chat._id, ws.user_id)
                .then((response) => wss.broadcast({ 
                    type: 'user left chat',
                    id: ws.user_id, 
                    userName: ws.userName
                } , response.users , message.from.user_id))
                .catch((err) => console.log('ERROR: user didnt leave chat ' , err))

            case 'private chat invite': 
            return 

            case 'private_chat_accepted': 
            return 
            
            case 'client closed': 
            return ws.terminate()
              
            default: return
        }
    })

    function deleteUser(user_id, userName){
        return App.deleteUser(ws.user_id)
        .then(chats => 
            chats.forEach(chat =>
                App.leaveChat(chat._id, user_id)
                .then(users => 
                    wss.broadcast({ 
                        type: 'user left',
                        data: { id: user_id, userName: userName }
                    } , users , user_id))
                .catch(err => console.log(`user not deleted` , err)))
        ).catch(err => console.log(`user not deleted` , err))
    }
});
