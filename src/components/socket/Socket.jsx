import React from 'react'

import socketIO from "socket.io-client";
const ENDPOINT = "http://localhost:4500/";
const socket = socketIO(ENDPOINT,{transports:['websocket']} )

const Socket = () => {

    // connecting socket 
    socket.on("connect", ()=>{
        console.log("connected")
    })
  return (
    <div>Socket</div>
  )
}

export default Socket ;