import { Link } from "react-router-dom";
import "./join.scss"
import { useState } from "react";

let user ;
const Join = () => {
  const [name, setNam] = useState("");

  // 
  const sendUser = ()=>{
    user =  document.getElementById("joinelement").value;
    console.log(user);
    
  }

  return (
    <div className='join'>
      <form className="joinwrapper">
        <h2>messanger</h2>
        <input onChange={(e)=>setNam(e.target.value)} type="text" placeholder="Enter your Name"  id="joinelement"/>
        {<Link onClick={(e)=>!name?e.preventDefault():null} to="/chat">
          <button onClick={sendUser}>join Now </button>
        </Link>}
      </form>
    </div>
  )
}

export default Join ;
export {user}
