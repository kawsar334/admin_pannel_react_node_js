import { useEffect, useReducer } from "react";
import { createContext } from "react";



export const AuthContext = createContext({})


const initialState = {
    user: JSON.parse(localStorage.getItem("currentuser"))||null ,
    loading:false,
    error:null
}

const AuthReducer = (state, action) => {
    switch (action.type) {

        case "LOGINSTART":
            return {
                user:null,
                 loading:true,
                error:false

            }
        case "LOGINSUCCESS":
            return {
                user:action.payload,
                loading:false,
                error:false

            }
        case "LOGINFAILURE":
            return {
                user:null,
                loading:false,
                error:true

            }
        default:
            return state
    }
}

const AuthContextProvider = ({children})=>{



 const [state,dispatch ]=  useReducer(AuthReducer, initialState);
 useEffect(()=>{
    localStorage.setItem("currentuser", JSON.stringify(state.user))
 },[state.user])


    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading:state.loading,
            error:state.loading ,
            dispatch
            
        }}>
            {children}

        </AuthContext.Provider>
    )
};


export default AuthContextProvider;