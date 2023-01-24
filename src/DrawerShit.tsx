import React, {FC, Fragment, useRef, useState} from 'react';
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button"
import './styles.css'

export interface DrawerSheetProps<T=string>{
    button: {title:string, id:T, onClick:(id:T)=>void}[],
    show: boolean,
    setShow: (value:boolean)=>void,
    onTitle: (title:string)=>void
}


const DrawerShit:FC<DrawerSheetProps> = (props) => {

    return (
        <Fragment>


        <Offcanvas show={props.show} onHide={props.setShow.bind(this, false)} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                    {
                        props.button.map((v,k)=>(
                            <Button className='menu-button' variant='primary' onClick={()=>{
                                props.setShow(false)
                                v.onClick(v.id)
                                props.onTitle(v.title)
                            }}>{v.title}</Button>

                        ))
                    }
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        </Fragment>
    );
};

export default DrawerShit;