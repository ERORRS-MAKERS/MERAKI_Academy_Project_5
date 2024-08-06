const socketMiddelwares=(socket,next)=>{
    if(socket[0]!=='notification'){
        next(new Error("socket middelware Error"))
    }else{
next()
    }
  }

module.exports=socketMiddelwares