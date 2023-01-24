import React, {FC} from 'react';
import './styles.css'
import {Button, Table} from "react-bootstrap";
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

    return (
        <Table striped bordered hover className="table-container">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>Роли</th>
                    <th></th>
                </tr>
            </thead>
            {users.map(user=>
                <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.fio}</td>
                    <td>{user.role}</td>
                    {typeof user.details!=='undefined' ? <td className='container-column'><Button variant="secondary" href={'/UserDetail/'+user.id}>Нажми меня</Button></td> : <th/>}
                </tr>
                </tbody>
            )}
        </Table>
    );
};

export default UserList;