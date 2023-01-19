import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import DetailInfo from "./DetailInfo";
import SignIn from "./SignIn";
import ProtectedRoutes from "./ProtectedRoutes";
import DrawerShit from "./DrawerShit";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<SignIn/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/home" element={<DrawerShit/>}/>
                    <Route path="/homepage" element={<HomePage/>}/>
                    <Route path="/details" element={<DetailInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;