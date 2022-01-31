import React from "react"
import style from "./style/Post.module.css"

const Post = (props) => {



    if(props.post === null) {
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

    return (
        <div className={style.item}>
            <h1>Редактирование поста Id = {props.post.id}</h1>
            <input type="text" value={props.post.title} onChange={ChangeTitle}/>
            <textarea value={props.post.body} onChange={ChangeBody}></textarea>
            <button>Применить</button>
        </div>
    )
}
export default Post


