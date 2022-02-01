import React, {useState} from "react"
import {connect} from "react-redux"
import Todo from "../Todo"
import {addTodo, updTodo, delTodo} from "../../redux/Reducers/TodoReducer";
import {useAlert} from "react-alert"

const TodoContainer = (props) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [id, setId] = useState(1)
    let [edit, setEdit] = useState(null)
    let alert = useAlert()

    const addTodo = (e) => {
        let error = []
        e.preventDefault();
        if (title === '') {
            error.push('название')
        }
        if (body === '') {
            error.push('Описание')
        }
        if(error.length !== 0) {
            error.join(' ')
            return alert.show(("обяхательно " + error), {type: 'error'})
        }
        props.addTodo({
            id: id,
            title: title,
            body: body
        })
        alert.show("Задача добавлена")
        setTitle('')
        setBody('')
    }
    const updTodo = (e) => {
        let error = []
        e.preventDefault();
        if (edit.title === '') {
            error.push('название')
        }
        if (edit.body === '') {
            error.push('Описание')
        }
        if(error.length !== 0) {
            error.join(' ')
            return alert.show(("обяхательно " + error), {type: 'error'})
        }
        props.updTodo(edit)
        alert.show("Задача отредактирована")
        setEdit(null)
    }
    const delTodo = (id) => {
        props.delTodo(id)
        alert.show("Задача удалена")
    }

    return (
        <Todo todo={props.todo} addTodo={addTodo} setTitle={setTitle} setBody={setBody} setId={setId} title={title} body={body} id={id} edit={edit} setEdit={setEdit} updTodo={updTodo} delTodo={delTodo}/>
    )
}


const MapStateToProps = (state) => {
    return {
        todo: state.TodoReducer.todo
    }
}

export default connect(MapStateToProps, {addTodo, updTodo, delTodo})(TodoContainer)