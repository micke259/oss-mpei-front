import React, {FC, Fragment} from 'react';
import '../styles.css'
import Button from "react-bootstrap/Button";

interface AdminHeaderProps {
    onMenuClick: ()=>void
    title:string
}

const AdminHeader:FC<AdminHeaderProps> = (props) => {



    return (
        <div className="admin-header-container">
            <div style={{display: "flex" , flexDirection:'row'}}>
                <h3>{props.title}</h3>
                {
                    window.location.pathname =='/admin' ?
                    <Button variant="outline-primary" className='MenuButton' onClick={props.onMenuClick.bind(this)}>
                        Меню
                    </Button>
                    :
                    <Button variant="outline-primary" className='MenuButton' onClick={props.onMenuClick.bind(this)}>
                        Назад
                    </Button>
                }
            </div>
            <div style={{marginLeft:1250}}>User LoggedIn</div>
            <Button variant='outline-primary' className='ExitButton' href='/*' >Выйти</Button>
        </div>
    );
};

export default AdminHeader;