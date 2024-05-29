import { useState } from "react"
import "./edituser.scss"
import { useLocation, useNavigate } from "react-router-dom";
import ApiCalls from "../../apicalls/productApi";
import axios from "axios";


const EditUser = () => {
  const [userInputs, setUserInputs] = useState({})
  const [isAdmin, setIsAdmin] = useState(true)
  const id = useLocation().pathname.split("/")[3]
  const {data, error, loading} = ApiCalls(`/user/find/${id}`)
  const user = data?.user;
  const navigate = useNavigate()


// handling multiple inputs using onchange event
  const handleChange = (e)=>{
   setUserInputs(prev=>{
    return {
      ...prev, [e.target.name]:e.target.value
    }
   })
  }


  const handleUpdate = async(e)=>{
    e.preventDefault();

    try{
      const res = await axios.put(`/user/${id}`, {...userInputs, isAdmin});
      navigate(`/user/${res.data.udatedUser._id}`)
      console.log(res.data)
      window.location.reload();

    }catch(err){
      console.log(err);
    }

  }


  return (
    <div  className="edituser">
      <div className="edituserwrapper">
      <div className="edituserleft">
        <div className="cart">
          <div className="carttop">
              <img src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilepicture" />
          </div>
          <div className="cartbottom">
              <span><b>Name:</b>{user?.name}</span>
              <span><b>Id:</b> {user?._id}</span>
              <span><b>isAdmin:</b>{user?.isAdmin ===true ?"Yes":"No"}</span>
              <span><b>Email:</b> {user?.email}</span>

 
            <div className="socialicons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="edituserright">
        <form  onSubmit={handleUpdate}>
            <div className="formitem">
              <h3>Edit <span className="text-danger ">{user?.name}</span>s account.</h3>
            </div>
          <div className="formitem">
              <label htmlFor="">Name</label>
            <input required type="text" className="form-input"name="name"  placeholder={user?.name} onChange={handleChange}/>
          </div>
            <div className="formitem">
              <label htmlFor="">password</label>
              <input required type="password" className="form-input" name="password" placeholder="password"  onChange={handleChange}/>
            </div>
            <div  required className="formitem">
              <label htmlFor="isAdmin">isAdmin</label>
             <select name="isAdmin" id="" onChange={(e)=>setIsAdmin(e.target.value)} >
              <option value="true">Admin</option>
                <option value="false">user</option>
             </select>
            </div>
            <div className="formitem">
              <button className="btn btn-primary">Update</button>
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default EditUser