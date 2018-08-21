'use strict';
/* 
*  we are using a promise based indexDB library by jack archibald
*  url: 
*  adding it here minified because its small size and no access to 
*  scripts inside this service worker
*
*/

!function(){function u(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function i(n,o,r){var i,e=new Promise(function(e,t){u(i=n[o].apply(n,r)).then(e,t)});return e.request=i,e}function e(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function t(t,n,o,e){e.forEach(function(e){e in o.prototype&&(t.prototype[e]=function(){return i(this[n],e,arguments)})})}function n(t,n,o,e){e.forEach(function(e){e in o.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function o(e,o,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[o],(t=i(e,n,arguments)).then(function(e){if(e)return new c(e,t.request)});var e,t})})}function r(e){this._index=e}function c(e,t){this._cursor=e,this._request=t}function s(e){this._store=e}function p(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function a(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function f(e){this._db=e}e(r,"_index",["name","keyPath","multiEntry","unique"]),t(r,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),o(r,"_index",IDBIndex,["openCursor","openKeyCursor"]),e(c,"_cursor",["direction","key","primaryKey","value"]),t(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(c.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),u(t._request).then(function(e){if(e)return new c(e,t._request)})})})}),s.prototype.createIndex=function(){return new r(this._store.createIndex.apply(this._store,arguments))},s.prototype.index=function(){return new r(this._store.index.apply(this._store,arguments))},e(s,"_store",["name","keyPath","indexNames","autoIncrement"]),t(s,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),o(s,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),n(s,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new s(this._tx.objectStore.apply(this._tx,arguments))},e(p,"_tx",["objectStoreNames","mode"]),n(p,"_tx",IDBTransaction,["abort"]),a.prototype.createObjectStore=function(){return new s(this._db.createObjectStore.apply(this._db,arguments))},e(a,"_db",["name","version","objectStoreNames"]),n(a,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},e(f,"_db",["name","version","objectStoreNames"]),n(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[s,r].forEach(function(e){i in e.prototype&&(e.prototype[i.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),n=t[t.length-1],o=this._store||this._index,r=o[i].apply(o,t.slice(0,-1));r.onsuccess=function(){n(r.result)}})})}),[r,s].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var o=this,r=[];return new Promise(function(t){o.iterateCursor(e,function(e){e?(r.push(e.value),void 0===n||r.length!=n?e.continue():t(r)):t(r)})})})});var d={open:function(e,t,n){var o=i(indexedDB,"open",[e,t]),r=o.request;return r&&(r.onupgradeneeded=function(e){n&&n(new a(r.result,e.oldVersion,r.transaction))}),o.then(function(e){return new f(e)})},delete:function(e){return i(indexedDB,"deleteDatabase",[e])}};"undefined"!=typeof module?(module.exports=d,module.exports.default=module.exports):self.idb=d}();

const app = {};

class Application {
    constructor(client, socket, user) {
        //console.log(app)
        //console.log('initiating sw app for : ' , user)
        
        this.client = client;
        this.socket = socket;
        this.user = user;

        this.socket.onopen = () => this.socket.send(JSON.stringify({
            type: 'register new user',
            data: { userName: this.user, client_id: this.client.id }  
        }))
        
        this.socket.onclose = (event) => console.log('socket closed: ' , event)
        this.socket.onerror = (err) => console.log('socket error: ' , err)

        this.socket.onmessage = (event) => {
           
            let msg = JSON.parse(event.data)
            console.log('new message: ' , msg)
            //if (this.client.id !== msg.client_id) return console.log('wrong client')
            
            //console.log('client id: ' , this.client.id , ' sent id: ' , msg.client_id , ' type: ' , msg.type)
            switch(msg.type){

                case 'registration successful': 
                return /*Application.dbSetUser(msg.user, msg.chat)
                    .then(res => this.client.postMessage(JSON.stringify({
                        type: 'new chat',
                        chat: res.chat 
                    }))).catch(err => console.log(err));*/

                case 'new user joined chat': 
                return

                case 'search for chat returns': 
                return

                case 'incoming text message': 
                return

                case 'new chat created': 
                return

                case 'chat deleted': 
                return

                case 'you joined chat': 
                return

                case 'you left chat': 
                return

                case 'private chat invite':
                return

                default: return
            } 
        }

    }

    static dbSetUser(user , lobby){
        console.log('recieved user Id: ' , user ,  ' and chat: ' , lobby)
        return new Promise((resolve, reject) =>
            idb.open('Carousel', 1)
            .then((db) => {
                let tx = db.transaction('me', 'readwrite');
                let store = tx.objectStore('me');
                
                store.put(user);
                return db;
            })
            .then((db) => {
                let tx = db.transaction('Chats', 'readwrite');
                let store = tx.objectStore('Chats');

                store.put(lobby);
                resolve({ user: user, chat:lobby});
            })
            .catch((err) => reject(Error(err)))
        )
    }

    msgFromClient(msg) {
        console.log('msg from client: ' , msg, ' ' , this.socket.readyState);
        switch(msg.type){

            case '0': 
            return

            case '1': 
            return

            case '2': 
            return

            case '3': 
            return

            case '4': 
            return

            case '5': 
            return

            case '6': 
            return

            default: return
        }
    }
}

self.addEventListener('message',(event) => {
    let promise = self.clients.matchAll().then((clientList) => 
        clientList.forEach((client) => {
            if (client.id === event.source.id){
                console.log('client: ' , client.id)
                if (!app[client.id]) return app[client.id] = new Application(client, new WebSocket('ws://localhost:8000/', 'echo-protocol'), event.data.userName);
                else return app[client.id].msgFromClient(event.data)
            }
            return 
        })
    );

    if (event.waitUntil) event.waitUntil(promise)
});


self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));


/*
function APP(client, socket, user){
    console.log(`app initisted for user: ${user}`)

    socket.onopen = () => socket.send(JSON.stringify({type: 'register new user', data: { userName:user }}))
    socket.onclose = (event) => console.log('socket closed: ' , event)
    socket.onerror = (err) => console.log('socket error: ' , err)

    socket.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        console.log('msg from server: ' , msg)
        switch(msg.type){

            case 'registration successful': 
            return dbSetUser(msg.user, msg.chat)
                .then(res => client.postMessage(JSON.stringify({
                    type: 'new chat',
                    chat: res.chat 
                }))).catch(err => console.log(err));

            case 'new user joined chat': 
            return

            case 'search for chat returns': 
            return

            case 'incoming text message': 
            return

            case 'new chat created': 
            return

            case 'chat deleted': 
            return

            case 'you joined chat': 
            return

            case 'you left chat': 
            return

            case 'private chat invite':
            return

            default: return
        } 
    }

    function msgFromClient(msg){
        console.log('msg from client: ' , msg, ' ' , socket.readyState);
        switch(msg.type){

            //case 'register new user': 
            //return socket.send(JSON.stringify(msg))

            case '0': 
            return

            case '1': 
            return

            case '2': 
            return

            case '3': 
            return

            case '4': 
            return

            case '5': 
            return

            case '6': 
            return

            default: return
        }
    }

    function dbSetUser(user , lobby){
        return new Promise((resolve, reject) =>
            idb.open('Carousel', 1)
            .then((db) => {
                let tx = db.transaction('me', 'readwrite');
                let store = tx.objectStore('me');
                
                store.put(user);
                return db;
            })
            .then((db) => {
                let tx = db.transaction('Chats', 'readwrite');
                let store = tx.objectStore('Chats');

                store.put(lobby);
                resolve({ user: user, chat:lobby});
            })
            .catch((err) => reject(Error(err)))
        )
    }

    function dbAddChat(chat){
        return new Promise((resolve, reject) =>
            idb.open('Carousel', 1)
            .then((db) => {
                let tx = db.transaction('Chats', 'readwrite');
                let store = tx.objectStore('Chats');

                store.put(chat);
                resolve(chat);
            })
            .catch((err) => reject(Error(err)))
        )
    }

    return { msgFromClient:(msg) => msgFromClient(msg) }
};

    
/*
    function dbRemoveChat(){
        return (domain) =>  new Promise((resolve, reject) =>
            idb.open('Carousel', 1)
            .then(() => )
            .then(() => )
            .then(() => resolve())
            .catch((err) => reject(Error(err)))
        )
    }

    function dbPushMessage(){
        return (domain) =>  new Promise((resolve, reject) =>
            idb.open('Carousel', 1)
            .then(() => )
            .then(() => )
            .then(() => resolve())
            .catch((err) => reject(Error(err)))
        )
    }
    
    /*****     self event listners  ********/
    // setting a postMessage event listner
    



/*
const ChatClient = function() {

    let _self = this; // Save outer context
    this.me = null; // This user
    this.others = []; // Other users

    this.socket = null;

    this.handshake = function() {

        this.socket = new WebSocket('ws://localhost:8000/' , protocol = 'echo-protocol');

        // Error occurred
        this.socket.onerror = function(error) {

            console.log('Socket error: ' + error);
        };

        // Opened
        this.socket.onopen = function() {

            console.log('Socket opened');

            _self.some(); //It should work
        };

        // Message received
        this.socket.onmessage = function(message) {

            console.log('Socket message: ' + message.data);
        };

        // Closed
        this.socket.onclose = function(message) {

            console.log('Socket message: ' + message.data);
        };
    };

    this.someOther = function() {

        alert('name');
    }

    var some = function some() {

        this.someOther();
    }
}
self.addEventListener('install', (event) => 
    event.waitUntil(
      fetch('./index.html').then(function() {
        // `skipWaiting()` forces the waiting ServiceWorker to become the
        // active ServiceWorker, triggering the `onactivate` event.
        // Together with `Clients.claim()` this allows a worker to take effect
        // immediately in the client(s).
        console.log('[ServiceWorker] Skip waiting on install');
        return self.skipWaiting();
      }).catch(err => console.log('error on line 195: ', err))
    )
  );
  
  // `onactivate` is usually called after a worker was installed and the page
  // got refreshed. Since we call `skipWaiting()` in `oninstall`, `onactivate` is
  // called immediately.
  self.addEventListener('activate', function(event) {
    // Just for debugging, list all controlled clients.
    self.clients.matchAll({
      includeUncontrolled: true
    }).then(function(clientList) {
      var urls = clientList.map(function(client) {
        return client.url;
      });
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });
  
    event.waitUntil(
      // Delete old cache entries that don't match the current version.
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== version) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }).then(function() {
        // `claim()` sets this worker as the active worker for all clients that
        // match the workers scope and triggers an `oncontrollerchange` event for
        // the clients.
        console.log('[ServiceWorker] Claiming clients for version', version);
        return self.clients.claim();
      })
    );
  });
/*
self.addEventListener('install', (event) => 
  event.waitUntil(fetch('./random-cached.jpg').then((response) => 
    caches.open(version).then((cache) => 
      cache.put('random.jpg', response)
    )
  ).then(() => self.skipWaiting()))
);
*/
