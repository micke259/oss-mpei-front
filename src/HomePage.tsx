import React, {Fragment} from 'react';
import './styles.css'
import UserList, {UserProps} from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const users: UserProps[] = [
        {id:'1', fio:"pidoras1", role:"govnoed1", details:123},
        {id:'2', fio:"pidoras2", role:"govnoed2"},
        {id:'3', fio:"pidoras3", role:"govnoed3", details:"xzu"}
    ]
    console.log(window.location.pathname)
    return (
        <Fragment>
            <UserList users={users}/>
        </Fragment>
    );
};

export default HomePage;