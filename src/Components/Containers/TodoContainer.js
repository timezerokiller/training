import React, {useState} from "react"
import {connect} from "react-redux"
import Todo from "../Public/Todo/Todo"
import {addTodo, updTodo, delTodo} from "../../Redux/Reducers/TodoReducer";
import {message} from "antd"

const TodoContainer = (props) => {
    let [id, setId] = useState(0)
    let [edit, setEdit] = useState(null)

    const addTodo = (title, body) => {
        let error = []
        if (title === '') {
            error.push('название')
        }
        if (body === '') {
            error.push('Описание')
        }
        if(error.length !== 0) {
            error = error.join(',').toLowerCase()
            return message.error({
                content: "Обязательно " + error
            })
        }
        props.addTodo({
            id: id+1,
            title: title,
            body: body
        })
        setId(id+1)
        message.success('Задача добавлена')
    }
    const updTodo = (editId, title, body) => {
        let error = []
        if (title === '') {
            error.push('название')
        }
        if (body === '') {
            error.push('Описание')
        }
        if(error.length !== 0) {
            error.join(' ')
            return message.error(error)
        }
        props.updTodo({
            id: editId,
            title:title,
            body:body
        })
        message.success('Задача отредактирова')
    }
    const delTodo = (todoid) => {
        props.delTodo(todoid)
        setId(id-1)
        message.info('Задача удалена')
    }

    return (
        <Todo todo={props.todo} addTodo={addTodo} setId={setId} id={id} updTodo={updTodo} delTodo={delTodo} edit={edit} setEdit={setEdit}/>
    )
}


const MapStateToProps = (state) => {
    return {
        todo: state.TodoReducer.todo
    }
}

export default connect(MapStateToProps, {addTodo, updTodo, delTodo})(TodoContainer)