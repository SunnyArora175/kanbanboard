const express = require('express')
const app =  express()
const http = require('http')
const server =  http.createServer(app)
const PORT = 5000;
const {Server} = require("socker.io")
const io = new Server(server)

app.get('/',(req,res)=>{
    res.send("hello world!!!1")
})
server.listen(PORT, ()=>{
    console.log("server is running")
})

io.on("connection",(socket)=>{
    console.log("connected");
})

