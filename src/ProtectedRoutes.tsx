import React from 'react';
import {Outlet} from "react-router-dom";
import SignIn from "./SignIn";

const useAuth = () =>{
    const user = {loggedIn:true}
    return user && user.loggedIn
}

const ProtectedRoutes = () => {

    const isAuth = useAuth()

    return isAuth ? <Outlet/> : <SignIn/>;
};

export default ProtectedRoutes;