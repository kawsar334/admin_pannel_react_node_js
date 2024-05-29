import { NavLink } from "react-router-dom"
import "./users.scss"
import { useEffect, useState } from "react"
import ApiCalls from "../../apicalls/productApi";
import axios from "axios";
import { message } from "antd";


const Users = () => {
    const [users, setUsers] = useState([]);
    const { data, error, loading } = ApiCalls(`/user/`);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/user/${id}`);
            console.log(res.data)
            if (res.data.success) {
                message.success(res.data.message)
                window.location.reload()
            }

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="user">



            <div className="userstop ">
                <h1>users List</h1>
                <NavLink to="/register">create a New user</NavLink>
            </div>
            <div className='usercontainer'>
                <table className="table ">
                    <thead>
                        <tr className=''>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">IsAdmin</th>
                            <th scope="col" colSpan={2}>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.users?.map((user) => (
                            <tr>
                                <th scope="row">{loading ? "..." : user?._id}</th>
                                <th scope="row">{loading ? "..." : user?.name}</th>
                                <td >
                                    <NavLink to={`/user/${user._id}`}>
                                        <img src={loading ? "..." : user.img || "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Loading..."
                                            className='listimg' />
                                    </NavLink>
                                </td>
                                <th scope="row">{loading ? "..." : user?.isAdmin === true ? "Yes" : "No"}</th>
                                <td><NavLink to={`/user/edit/${user?._id}`} className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></NavLink> <button className='btn btn-danger' onClick={() => handleDelete(user?._id)}><i className="fa-solid fa-trash"></i></button></td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users