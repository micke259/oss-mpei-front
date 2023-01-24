import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AdminHeader from "./AdminHeader";
import {useNavigate} from "react-router-dom";
import Table from "react-bootstrap/Table";

const UserDetail = () => {

    const user = {
        id:'1', name:'negr1',
        surname:'negrenko1',
        cash:'123$',
        group:'plant1',
        email:'negr1@mail.us',
        email_verified_at:'sometime1'
    }
    const navigate = useNavigate();
    return (
        <Fragment>
            <AdminHeader onMenuClick={()=>navigate(-1)} title={''}/>
            <Card style={{backgroundColor:'lightcyan', width:'18rem'}}>
                <Card.Img
                    className='image'
                    variant="top"
                    src="https://ih1.redbubble.net/image.782979964.4197/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"/>
                    <Card.Body>
                    <Card.Title>{user.name} {user.surname}</Card.Title>
                    <Card.Text>
                        {user.group} {user.email}
                    </Card.Text>
                    <Card.Text>{user.cash}</Card.Text>
                    <Button variant='success'>Сохранить</Button>
                    <div style={{marginTop:15}}>
                    <Button variant='danger'>Удалить</Button>
                    </div>
                </Card.Body>
            </Card>
            <Table striped bordered hover>
                <tbody>
                <th>
                    {user.email_verified_at}
                </th>
                </tbody>
            </Table>
        </Fragment>
    );
};

export default UserDetail;