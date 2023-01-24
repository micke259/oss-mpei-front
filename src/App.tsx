import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminPanel from "./admin/AdminPanel";
import TaskDetail from "./admin/TaskDetail";
import UserDetail from "./admin/UserDetail";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<SignIn/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/admin" element={<AdminPanel/>}/>
                    <Route path="/homepage" element={<HomePage/>}/>
                    <Route path="/UserDetail/:id" element={<UserDetail/>}/>
                    <Route path="/tasks" element={<TaskDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;