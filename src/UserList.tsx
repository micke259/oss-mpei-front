import React, {FC} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface UsersListProps{
    users: UserProps[]
}

export interface UserProps{
    id:string,
    fio:string,
    role:string,
    details?: any

}


const UserList:FC<UsersListProps> = ({users}) => {

    const OnUserClick = (userId:number):void =>{
        alert(userId)
    }

    return (
        <Container>
            {users.map(user=>
                <Row key={user.id}>
                <Col className='column'>{user.id}</Col>
                <Col className='column'>{user.fio}</Col>
                <Col className='column'>{user.role}</Col>
                <Col style={{marginTop: 15}}>
                    {typeof user.details!=='undefined' && <Button variant="secondary" onClick={OnUserClick.bind(this, user.details)}>Нажми меня</Button>}
                </Col>
            </Row>)}
            <Button variant='primary' href='/home'>БАЗА</Button>
            <Button variant='secondary' href='/details' style={{marginLeft:15}}>ПРОФИЛЬ</Button>
            <Button variant='outline-primary' href="*" style={{marginLeft: 450}}>Выйти нахуй</Button>
        </Container>
    );
};

export default UserList;