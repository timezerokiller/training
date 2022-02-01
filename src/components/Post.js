import React from "react"
import MyForm from "../UI/MyForm"
import {Col} from "react-bootstrap";

const Post = (props) => {


    if (props.post === null) {
        return <div>
            <h1>Загрузка...</h1>
        </div>
    }

    let form = [
        {
            id: "name",
            type: "text",
            placeholder: "Название",
            label: "Название",
            description: "Введите название",
            value: props.post.title,
        },
        {
            id: "description",
            as: "textarea",
            rows: "3",
            placeholder: "Описание",
            label: "Описание",
            description: "Введите описание",
            value: props.post.body,
        },
    ];

    return (
        <Col xs={12} md={6}>
            <h1>Редактировать</h1>
            <MyForm form={form} setPost={props.setPost} updPost={props.UpdPost}/>
        </Col>
    )
}
export default Post


