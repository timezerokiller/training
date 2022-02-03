import React, {useState} from "react";
import {Col, Form, Button, Row} from "react-bootstrap"
import {useNavigate} from "react-router-dom/index";

const Todo = (props) => {

    let navigate = useNavigate()


    const ChangeTitle = (e) => {
        props.setTitle(e.target.value)
    }
    const ChangeBody = (e) => {
        props.setBody(e.target.value)
    }
    const ChangeEditTitle = (e) => {
        props.setEdit({
            ...props.edit,
            title: e.target.value
        })
    }
    const ChangeEditBody = (e) => {
        props.setEdit({
            ...props.edit,
            body: e.target.value
        })
    }


    const editTodo = (e, id) => {
        for(let i = 0; i < props.todo.length; i++){
            if(props.todo[i].id === id) {
                props.setEdit({
                    id: props.todo[i].id,
                    title: props.todo[i].title,
                    body: props.todo[i].body
                })
            }
        }
    }


    return (
        <Row>
            <Col xs={12} md={6}>
                <h1>Список задач</h1>
                {props.todo.length
                    ? props.todo.map(todo =>
                        <div key={todo.id}>
                            <h3>№{todo.id}: {todo.title}</h3>
                            <p>{todo.body}</p>
                            <div className="mb-2">
                                <Button className="m-1" variant="success" type="submit"
                                        onClick={(e) => (editTodo(e, todo.id))}>
                                    Редактировать
                                </Button>
                                <Button className="m-1" variant="danger" type="submit"
                                        onClick={() => {props.delTodo(todo.id)}}>
                                    Удалить
                                </Button>
                            </div>
                        </div>)
                    : <div><h3>Список задач пуст</h3></div>
                }
            </Col>
            <Col xs={12} md={6}>
                {props.edit
                    ? <div>
                        <h1>Редактировать задачу</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Название" value={props.edit.title} onChange={(e) => {
                                    ChangeEditTitle(e)
                                }}/>
                                <Form.Text className="text-muted">
                                    Введите название задачи
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDesc">
                                <Form.Label>Описание</Form.Label>
                                <Form.Control type="text" placeholder="Описание" value={props.edit.body} onChange={(e) => {
                                    ChangeEditBody(e)
                                }}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e) => {props.updTodo(e)
                            navigate('/todo')}}>
                                Редактировать
                            </Button>
                        </Form>
                    </div>
                    : <div>
                        <h1>Добавить задачу</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Название</Form.Label>
                                <Form.Control type="text" placeholder="Название" value={props.title} onChange={(e) => {
                                    ChangeTitle(e)
                                }}/>
                                <Form.Text className="text-muted">
                                    Введите название задачи
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDesc">
                                <Form.Label>Описание</Form.Label>
                                <Form.Control type="text" placeholder="Описание" value={props.body} onChange={(e) => {
                                    ChangeBody(e)
                                }}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e) => {
                                props.addTodo(e)
                                props.setId(props.id + 1)
                            }}>
                                Добавить
                            </Button>
                        </Form>
                    </div>}
            </Col>
        </Row>
    )
}

export default Todo