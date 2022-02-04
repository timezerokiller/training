import React, {useState} from "react";
import {useNavigate} from "react-router-dom/index";
import { Form, Input, Button, Row, Col } from 'antd';

const Todo = (props) => {

    let navigate = useNavigate()

    const editTodo = (e, id) => {
        for (let i = 0; i < props.todo.length; i++) {
            if (props.todo[i].id === id) {
                props.setEdit({
                    id: props.todo[i].id,
                    title: props.todo[i].title,
                    body: props.todo[i].body
                })
            }
        }
    }

    const onEditTodo = (values: any) => {
        console.log(props.edit.id)
        props.updTodo(props.edit.id,values.title, values.body)
        navigate('/todo')
    };

    const onEditTodoFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onAddTodo = (values: any) => {
        console.log(values)
        props.addTodo(values.title, values.body)
    };

    const onAddTodoFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Row>
            <Col md={12} xs={24}>
                <h1>Список задач</h1>
                {props.todo.length
                    ? props.todo.map(todo =>
                        <div key={todo.id}>
                            <h3>№{todo.id}: {todo.title}</h3>
                            <p>{todo.body}</p>
                            <div className="mb-2">
                                <button className="m-1" variant="success" type="submit"
                                        onClick={(e) => (editTodo(e, todo.id))}>
                                    Редактировать
                                </button>
                                <button className="m-1" variant="danger" type="submit"
                                        onClick={() => {
                                            props.delTodo(todo.id)
                                        }}>
                                    Удалить
                                </button>
                            </div>
                        </div>)
                    : <div><h3>Список задач пуст</h3></div>
                }
            </Col>
            <Col md={12} xs={24}>
                {props.edit
                    ? <div>
                        <h1>Редактировать задачу</h1>
                        <Form name="editTodo"
                              labelCol={{ span: 0}}
                              wrapperCol={{ span: 10 }}
                              onFinish={onEditTodo}
                              onFinishFailed={onEditTodoFailed}
                              autoComplete="off" >
                            <Form.Item
                                label="Название"
                                name="title"
                                value={props.todo.title}
                                rules={[{ required: true, message: 'Название обязательно' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Описание"
                                name="body"
                                value={props.todo.body}
                                rules={[{ required: true, message: 'Описание обязательно' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 0, span: 5 }}>
                                <Button type="primary" htmlType="submit">
                                    Редактировать
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    : <div>
                        <h1>Добавить задачу</h1>
                        <Form name="addTodo"
                              labelCol={{ span: 0}}
                              wrapperCol={{ span: 10 }}
                              onFinish={onAddTodo}
                              onFinishFailed={onAddTodoFailed}
                              autoComplete="off" >
                            <Form.Item
                                label="Название"
                                name="title"
                                rules={[{ required: true, message: 'Название обязательно' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Описание"
                                name="body"
                                rules={[{ required: true, message: 'Описание обязательно' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 0, span: 5 }}>
                                <Button type="primary" htmlType="submit">
                                    Добавить
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                }
            </Col>
        </Row>
    )
}

export default Todo