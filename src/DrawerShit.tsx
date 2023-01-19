import React, {FC, useState} from 'react';
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button"

const DrawerShit:FC = () => {

    const [show, setShow] = useState(false)

    const handleClose = ()=> setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>Меню</Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/homepage">Ебаная таблица</Nav.Link>
                    <Nav.Link href="/details">Дисплей cum</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default DrawerShit;