import React from "react"
import MyForm from "../UI/MyForm"
import {Col} from "react-bootstrap";

const Post = (props) => {


    if (props.post === null) {
        return <div>
            <h1>Загрузка...</h1>
        </div>
    }
    const ChangeTitle = (e) => {
        props.UpdPost({
            title: e.target.value
        })
    }
    const ChangeBody = (e) => {
        props.UpdPost({body: e.target.value})
    }

    let form = [
        {
            id: "name",
            type: "text",
            placeholder: "Название",
            label: "Название",
            description: "Введите название",
            value: props.post.title,
            onChange: ChangeTitle
        },
        {
            id: "description",
            as: "textarea",
            rows: "3",
            placeholder: "Описание",
            label: "Описание",
            description: "Введите описание",
            value: props.post.body,
            onChange: ChangeBody
        },
    ];


    return (
        <Col xs={12} md={6}>
            <MyForm form={form} setPost={props.setPost}/>
        </Col>
    )
}
export default Post


