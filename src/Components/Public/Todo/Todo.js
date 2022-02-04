import React, {useState} from "react";
import {useNavigate} from "react-router-dom/index";
import { Form, Input, Button, Row, Col } from 'antd';
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import TodoEdit from "./TodoEdit"

const Todo = (props) => {



    return (
        <Row>
            <TodoList {...props}/>
            <Col md={12} xs={24}>
                {props.edit
                    ? <TodoEdit {...props}/>
                    : <TodoAdd {...props}/>
                }
            </Col>
        </Row>
    )
}

export default Todo