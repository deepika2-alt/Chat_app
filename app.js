const express=require('express');
const http=require('http');
const {Server}=require('socket.io');

const app=express();
const server=http.createServer(app);
app.use(express.static('public'));
const io =new Server(server)  //attach Socket.io to the server 
io.on('connection',(socket)=>{
    console.log('A user Connected');
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    })
    socket.on('disconnect',()=>{
        console.log('A user Disconnected');
    })
}) ;
server.listen(8000,()=>{
    console.log('server started');
})

