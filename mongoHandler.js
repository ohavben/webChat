'use strict';
const mongoose = require('mongoose');
const chats = require('./chat_schema.js');
const users = require('./user_schema.js');

class mongoHandler {
    constructor(host, domain, options){
        this.db = mongoose.connect(`${host}${domain}`, options)
    }

    createUser(user){
        return new Promise((resolve, reject) =>{

            let newUser = new users({
                _id: new mongoose.Types.ObjectId(),
                userName: user.userName,
                socketID: user.socketID,
                peerID: user.peerID,
                avatar: user.avatar
            });
            
            newUser.save().catch(err => reject(Error(err)));

            //checking to see if there is at least one chat in the domain. if not, create one
            chats.findOne({ title: 'lobby' }).sort('-created')
            .then((chat) => {

                if (!chat) {

                    let lobby = new chats({
                        _id: new mongoose.Types.ObjectId(),
                        title: 'lobby',
                        by: 'Carousel',
                        avatar: 'na',
                        users: [mongoose.Types.ObjectId(newUser._id)]
                    });

                    lobby.save().catch(err => reject(Error(err)));
                    resolve({ user: newUser , chat:lobby })

                } else {
                    // if the chat exist we add the new user to its user's array
                    chat.users.push(mongoose.Types.ObjectId(newUser._id));
                    chat.save().catch(err => reject(Error(err)));
                    resolve({ user:newUser , chat: chat })

                }
            }).catch((err) => reject(Error(err)))
        })
    }

    deleteUser(userId){
        return new Promise((resolve, reject) => {
            users.deleteOne({'_id' : mongoose.Types.ObjectId(userId) })
            .then(() => chats.find({ users: mongoose.Types.ObjectId(userId) }))
            .then((chats) => resolve(chats))
            .catch((err) => reject(Error(err)))
        })
    }

    joinChat(chatId, userId){
        return new Promise((resolve, reject) =>{
            chats.findById(chatId)
            .then((chat) => {
                chat.users.push(mongoose.Types.ObjectId(userId));
                chat.save().catch(err => reject(Error(err)));
                resolve(chat)
            })
            .catch((err) => reject(Error(err)))
        })
    }

    leaveChat(chatId, userId){
        return new Promise((resolve, reject) =>{
            chats.findById(chatId)
            .then((chat) => {
                chat.users.pull(mongoose.Types.ObjectId(userId));
                chat.save().catch(err => reject(Error(err)));
                resolve(chat.users)
            })
            .catch((err) => reject(Error(err)))
        })
    }

    createChat(chatOptions){
        return new Promise((resolve, reject) =>{
            let newChat = new chat({
                _id: new mongoose.Types.ObjectId(),
                title: chatOptions.title,
                by: chatOptions.by,
                avatar: chatOptions.avatar,
                users: [chatOptions.by.userId]
            });

            newChat.save().catch(err => reject(Error(err)));
            resolve(newChat)
        })
        .catch((err) => reject(Error(err)))
    }

    deleteChat(chatId){
        return new Promise((resolve, reject) =>{
            chat.findOne({ '_id': mongoose.Types.ObjectId(chatId) })
            .then((chat) => {
                let response  = { id: chatId, users: chat.users };
                chat.deleteOne({ '_id': mongoose.Types.ObjectId(id) })
                return response
            })
            .then((response) => resolve(response))
            .catch((err) => reject(Error(err)))
        })
    }

    searchForChats(request){
        return new Promise((resolve, reject) => {
            chats.find((request.title) ? { title:request.title }: {}).sort('-created').limit((request.limit)?request.limit:20)
            .then((chats) => resolve(chats))
            .catch((err) => reject(Error(err)))
        })
    }

    searchForUsers(request){
        return new Promise((resolve, reject) => {
            users.find((request.userName) ? { userName: request.UserName}: { userName: {}})
            .sort('-created').limit((request.limit)?request.limit:20)
            .then((_users) => resolve(_users))
            .catch((err) => reject(Error(err)))
        })
    }

    getUsersInChatById(chatId){
        return new Promise((resolve, reject) => {
            chats.findById(chatId)
            .then((chat) => resolve(chat.users))
            .catch((err) => reject(Error(err)))
        })
    }
}

module.exports = mongoHandler   
