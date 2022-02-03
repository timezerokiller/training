import React, {useState} from "react"
import {Col, Form, Button} from "react-bootstrap"

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const ChangeLogin = (e) => {
        setLogin(e.target.value)
    }
    const ChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const ClickLogin = (e) => {
        props.loginIn({
            login: login,
            password: password
        })
        e.preventDefault()
    }


    return (
        <Col xs={12} md={4}>
            <h1>Логин</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formLoginNamr">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" placeholder="Введите логин" onChange={(e) => {ChangeLogin(e)}}/>
                    <Form.Text className="text-muted">
                        Логин: Admin
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLoginPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" onChange={(e) => {ChangePassword(e)}}/>
                    <Form.Text className="text-muted">
                        Пароль: 123
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {ClickLogin(e)}}>
                    Отправить
                </Button>
            </Form>
        </Col>
    )
}

export default Login