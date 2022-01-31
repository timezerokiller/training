import React, {useEffect} from "react"
import {Form, Button} from "react-bootstrap"

const MyForm = (props) => {
    let form = props.form.form

    if (!form) {
        return (<h2>Загрузка...</h2>)
    }
    console.log(props)

    return (
        <Form>
            {form.map(form =>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>form.label</Form.Label>
                    <Form.Control type={form.type} placeholder={form.placeholder}/>
                    <Form.Text className="text-muted">
                        {form.description}
                    </Form.Text>
                </Form.Group>)}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">

            </Button>
        </Form>
    )
}

export default MyForm