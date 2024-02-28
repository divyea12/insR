import React from 'react'
import {createContext,useContext,useState } from 'react'
import axios from 'axios'
const AuthContext = createContext(null);
export const useAuth=()=>{
    return useContext(AuthContext);
}

function AuthProvider({children}){
    const[user,setUser] = useState();
    const[loading,setLoading] = useState(true);

    const value={
        user,setUser,loading,setLoading
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;