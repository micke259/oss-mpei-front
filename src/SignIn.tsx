import React, {FC, useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './styles.css'


const SignIn = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e:any) =>{
        setLogin(e.target.value)
    }
    const passwordHandler = (e:any) =>{
        setPassword(e.target.value)
    }


    return (
        <Form>
            <Form.Group  controlId="formBasicLogin">
                <Form.Control onChange={e=>loginHandler(e)} value={login} className="authForm" type="login" placeholder="Введите логин" />
            </Form.Group>
            <Form.Group  controlId="formBasicPassword">
                <Form.Control onChange={e=>passwordHandler(e)} value={password} className="authForm" type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button href='/admin' className="authForm" variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    );
};

export default SignIn;