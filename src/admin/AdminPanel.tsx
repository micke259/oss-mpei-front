import React, {Fragment, useState} from 'react';
import DrawerShit,{DrawerSheetProps} from "../DrawerShit";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import HomePage from "../HomePage";

const AdminPanel = () => {
    const [title, setTitle] = useState('Пользователи')
    const [showCanvas, setShowCanvas] = useState(false)
    const [page, setPage]=useState("users")
    const onCanvasClick=(id:string)=>setPage(id)
    const pages:DrawerSheetProps = {
        button:[
            {
                title:'Пользователи',
                id:"users",
                onClick: onCanvasClick
            },
            {
                title:'Магазин',
                id:"shop",
                onClick: onCanvasClick
            },{
                title:'Задания',
                id:"tasks",
                onClick: onCanvasClick
            },

        ],
        show:showCanvas,
        setShow:setShowCanvas,
        onTitle:setTitle
    }



    return (
        <Fragment>
            <AdminHeader title={title} onMenuClick={setShowCanvas.bind(this, true)}/>
            <DrawerShit{...pages}/>
            {page=='users' && <HomePage/>}
            {page=='tasks' && <div style={{height:100, aspectRatio:1, backgroundColor:"green"}}></div>}
            {page=='shop' && <div style={{height:100, aspectRatio:1, backgroundColor:"blue"}}></div>}
            <AdminFooter/>
        </Fragment>
    )
}

export default AdminPanel;