import React,{useState,useEffect} from 'react';
import socketInit from '../../service/socket/socketServer';
import SendNotify from './SendNotify';
import { useSelector } from 'react-redux';

const DoctorsConnection = () => {
  const user_id = useSelector((store) => store.doctor.doctorId);
  const token = useSelector((store) => store.doctor.doctorToken);
  const[socket,setSocket]=useState(null)
  const[isConnected,setIsConnected]=useState(false)

 useEffect(()=>{
  //
 }) 

  useEffect(()=>{
socket?.on('connect',()=>{
console.log('hello from doctor')
setIsConnected(true)
})
socket?.on('connect_error',(error)=>{
  console.log('error',error.message)
  setIsConnected(false)

  })
  return( ()=>{
    socket?.close()
    socket?.removeAllListeners()
    setIsConnected(false)
  }
    

  )
  },[socket])

  return (
    <div>
      <h1>Notification System</h1>
     {/*  <input type='text' placeholder='user_id' onChange={(e)=>{
        setUser_id(e.target.value)
      }}></input>
      <input type='text' placeholder='token' onChange={(e)=>{
        setToken(e.target.value)
      }}></input> */}
       <button onClick={()=>{
        setSocket(socketInit({user_id,token}))
      }}>connect</button> 
     {isConnected &&<SendNotify socket={socket} user_id={user_id}/> }


    </div>
  );
};




export default DoctorsConnection;
