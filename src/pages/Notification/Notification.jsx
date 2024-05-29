import { useEffect, useState } from "react";
import "./notification.scss"
import axios from "axios";
import { NavLink } from "react-router-dom";

const Notification = () => {

    const id = localStorage.getItem("user");
    const [notification, setNotification] = useState([])
    console.log(notification)

useEffect(()=>{
    const getNotification= async()=>{
        try{

            const res = await axios.get(`/user/find/${id}`);
            setNotification(res.data.user.notification)
        }catch(err){
            console.log(err);
        }
    }
    getNotification()
},[id])
    console.log(id)
  return (
  

    <div className="notificationcontainer">
        <button>Mark as Read</button>
        {notification.map((n)=>(
            <div className="notification">{n}</div>
            ))}
            
</div>
           
  )
}

export default Notification