import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => {},
    onLogin: (email,password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedLoginUserInformation = localStorage.getItem('isLoggedIn');
        if(storedLoginUserInformation==='1'){
            setIsLoggedIn(true);
        }
    },[]);
    const logoutHandler = () =>{
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    }
    
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn","1");
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogOut:logoutHandler, onLogin: loginHandler}}>
        ${props.children}
    </AuthContext.Provider>
}

export default AuthContext;