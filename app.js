const express = require("express");
let app = express();
const http = require('http');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const SocketIO = require('socket.io');
// configuracion de base de datos
// mongoose.set('useCreateIndex', true)
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', err => {
//     console.log("conexion error ", err);
// });
// db.once('open', () => {
//     console.log('conexion exitosa');
// });



/* Creates new HTTP server for socket */ 
var socketServer = require('http').createServer(app); 
var io = require('socket.io')(socketServer, {
    cros: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
socketServer.listen(process.env.PORT || 3000, function(){ 
    console.log('Socket server listening on : 3002'); 
});
io.on('connection', function(socket){
    console.log('Socket connection ', socket.id);
    
    socket.on("play", ()=>{
        console.log("play");
        io.sockets.emit('play-server') 
    });
    socket.on("pause", ()=>{
        console.log("pause");
        io.sockets.emit('pause-server')
    });
});

// //router
// const authRouter = require('./routes/auth/auth');
// const actionsRouter = require('./routes/actions');

// app.set('port',  process.env.PORT || 3000);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// //rutas

// app.use('/api/auth', authRouter)
// app.use('/api/actions', actionsRouter)
// app.get('/', function(req,res) {
//     res.send("holla")
// });
// const server = app.listen(app.get('port'), function() {
//     console.log('server corriendo');
// });

// let io = SocketIO(server);

// exports.io = io;