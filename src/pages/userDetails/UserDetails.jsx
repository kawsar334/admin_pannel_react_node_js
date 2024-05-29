import { NavLink, useLocation } from "react-router-dom"
import "./userdetails.scss"
import ApiCalls from "../../apicalls/productApi"
import Loader from "../../components/loader/Loader"

const UserDetails = () => {
  const id = useLocation().pathname.split("/")[2]
  const { data, error, loading } = ApiCalls(`/user/find/${id}`);
  const user = data?.user;
  return (
    <div className="userr">
      {loading ? <div className="userrwrapper"><Loader/></div> : <div className="userrwrapper">
        <div className="cart ">
          <img src={user?.img || "https://images.pexels.com/photos/5455609/pexels-photo-5455609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." className="userImg" />
          <div className="userdetails">
            <span><b>Email:</b>{user?.name}</span>
            <span><b>Email:</b>{user?.email}</span>
            <span><b>IsAdmin:</b>{user?.isAdmin === true ?"Yes":'No'}</span>
            <span><b>createdAt:</b>{user?.createdAt}</span>
            <button><NavLink to={`/user/edit/${user?._id}`}>Edit</NavLink></button>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default UserDetails