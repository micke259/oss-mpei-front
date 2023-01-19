import React from 'react';
import './styles.css'
import UserList, {UserProps} from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawerShit from "./DrawerShit";

const HomePage = () => {
    const users: UserProps[] = [
        {id:'1', fio:"pidoras1", role:"govnoed1", details:123},
        {id:'2', fio:"pidoras2", role:"govnoed2"},
        {id:'3', fio:"pidoras3", role:"govnoed3", details:"xzu"}
    ]
    return (
        <>
            <DrawerShit/>
            <UserList users={users}/>
        </>
    );
};

export default HomePage;