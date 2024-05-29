import axios from "axios";
import { loginFailur, loginStart, loginSuccess } from "../redux/authSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginApi = async (dispatch, user) => {
    try {

        dispatch({ type:"LOGINSTART"})
        const res = await axios.post("/auth/login", user);
        dispatch({ type: "LOGINSUCCESS", payload:res.data })
        res.data && localStorage.setItem("user", res.data.others._id)
        message.success(res.data. message)
        window.location.replace("/")
      

    } catch (err) {
        console.log(err);
        if(err){
            message.error("something went wrong !")
        }
        
        dispatch({ type: "LOGINFAILURE" })

    }
}

export default LoginApi;