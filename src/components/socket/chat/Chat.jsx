import "./chat.scss"
import { user } from "../join/Join"
import SocketIo from "socket.io-client";
import { useEffect } from "react";
const ENDPOINT = "http://localhost:4500/";
const Chat = () => {

    

    useEffect(() => {
        const socket = SocketIo(ENDPOINT, { transforts: ['websocket'] });
        socket.on("connect", () => {
            alert("connected")
        })
        socket.emit("joined", { user });
        //  
        socket.on("welcome", (user) => {
            console.log(user.user, user.message)
        });
    }, []);
    


    return (
        <div className="chat">
            <div className="chatcontainer">
                <div className="header">
                    <h2>{user}</h2>
                </div>
                <div className="chatbox"></div>
                <div className="inputbox">
                    <input type="text" placeholder="Enter your message" id="chatInput" />
                    <button className="sendbtn">send</button>
                </div>
            </div>

        </div>
    )
}

export default Chat