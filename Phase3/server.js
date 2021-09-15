let express  = require("express");
app = express ()
let http = require("http").Server(app); // to load the library we have to run port number using the module
let io = require("socket.io")(http);

let robert = "message"
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", (socket)=>{
    socket.on("name", (name)=>{
        console.log(name);
    })
        socket.on("message", (msg)=>{
            console.log(msg);
            socket.emit("robertMsg",robert)
        })
})




http.listen(9090, ()=>console.log('Server running on port 9090'))