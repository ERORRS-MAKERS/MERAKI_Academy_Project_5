const {Server}=require("socket.io")

const io = new Server(8080,{cors:{origin:"*"}})
const clients={}

/* const doctors = io.of("/doctors")
const users =io.of("/users")
doctors.on("connection",(socket)=>{
  
  }) 
  users.on("connection",(socket)=>{
    
    })  */

const auth =require('../middlewares/authSoket')
const notificationHandler=require('../controllers/notification')
const socketMiddelwares =require('../middlewares/NotifiMiddelware')
io.use(auth)

io.on("connection",(socket)=>{
  console.log('connected')
  socket.use(socketMiddelwares)
  socket.on('error',(error)=>{
socket.emit('error',(error.message))
  }) 
 
  const user_id=socket.handshake.headers.user_id
  clients[user_id]={socket_id:socket.id,user_id}

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`)})

    notificationHandler(socket,io)
    

    socket.on("disconnect",()=>{
      for(key in clients){
        if (clients[key].socket_id===socket.id){
          delete clients[key]
        }
      }
    })
 })
 

