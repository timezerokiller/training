import React from "react"
import {Col} from "antd"



const TodoList = (props) => {

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

    return (
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
    )
}

export default TodoList