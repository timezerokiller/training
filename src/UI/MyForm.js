import React, {useEffect, useState} from "react"
import {Form, Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom";
import {useAlert} from "react-alert"

const MyForm = (props) => {


    const ChangeTitle = (e) => {
        props.updPost({
            title: e.target.value
        })
    }
    const ChangeBody = (e) => {
        props.updPost({
            body: e.target.value
        }, () => {console.log("test")})
    }

    let alert = useAlert()

    let navigate = useNavigate();

    if (!props.form) {
        return (<h2>Загрузка...</h2>)
    }

    let form = props.form

    console.log(props)

    return (
        <Form>
            {form.map((form, index) =>
                <Form.Group key={index} className="mb-3" controlId={form.id}>
                    <Form.Label>{form.label}</Form.Label>
                    {form.as || form.rows
                        ? <Form.Control style={{height: '150px'}} onChange={(e) => {ChangeBody(e)}} value={form.value}
                                        row={form.rows} as={form.as} placeholder={form.placeholder}/>
                        : <Form.Control onChange={(e) => {ChangeTitle(e)}} value={form.value} type={form.type}
                                        placeholder={form.placeholder}/>
                    }
                    <Form.Text className="text-muted">
                        {form.description}
                    </Form.Text>
                </Form.Group>)}
            <Button onClick={(e) => {
                e.preventDefault()
                props.setPost()
                navigate("/posts")
                alert.show("Пост отредактирован")
            }} variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    )
}

export default MyForm