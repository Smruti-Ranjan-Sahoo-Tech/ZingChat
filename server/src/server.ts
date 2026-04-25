import express from "express"
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors:{
    origin:"*"
  },
});

const ROOM="group";

io.on("connection",(socket)=>{
    console.log("A user connected:", socket.id);
    socket.on("joinRoom",async(userName:string)=>{
           console.log(`${userName} is joining the group.`)
     })
})
