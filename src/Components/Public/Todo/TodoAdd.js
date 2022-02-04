import React from "react"
import {Form, Button, Input} from "antd"

const TodoAdd = (props) => {

    const onAddTodo = (values: any) => {
        console.log(values)
        props.addTodo(values.title, values.body)
    };

    const onAddTodoFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
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
    )
}

export default TodoAdd