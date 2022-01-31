import React, {useEffect} from "react"
import {Form, Button} from "react-bootstrap"

const MyForm = (props) => {

    if (!props.form) {
        return (<h2>Загрузка...</h2>)
    }

    let form = props.form

    console.log(props)

    return (
        <Form>
            {form.map((form, index)=>
                <Form.Group key={index} className="mb-3" controlId={form.id}>
                    <Form.Label>{form.label}</Form.Label>
                    {form.as || form.rows
                         ? <Form.Control style={{height: '150px'}} onChange={form.onChange} value={form.value} row={form.rows} as={form.as} placeholder={form.placeholder}/>
                         : <Form.Control onChange={form.onChange} value={form.value} type={form.type} placeholder={form.placeholder}/>
                    }
                    <Form.Text className="text-muted">
                        {form.description}
                    </Form.Text>
                </Form.Group>)}

            <Button onClick={(e) => {
                e.preventDefault()
                props.setPost()
            }} variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    )
}

export default MyForm