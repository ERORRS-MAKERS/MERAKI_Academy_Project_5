

const notificationHandler=(socket,io)=>{
    socket.on('notification',(data)=>{
        data.success=true
        socket.to('room-'+data.to).emit("notification",data)
        socket.emit("notification",data)
      })
}

module.exports=notificationHandler