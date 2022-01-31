import React from "react"
import style from "./style/Posts.module.css"
import {Link} from "react-router-dom"

const Posts = (props) => {
    let posts

    props.posts === null
        ? posts = "Loading..."
        : posts = props.posts.map(posts =>
        <div className={style.item} key={posts.id}>
            <h3 key={posts.title}>{posts.title}</h3>
            <p key={posts.body}>{posts.body}</p>
            <button onClick={()=> {props.deletePost(posts.id)}}>Удалить</button>
            <button><Link to={"/posts/"+posts.id}>Редактировать</Link></button>
        </div>
        )

    return (
        <div>
            <h1>Статьи</h1>
            {posts}
        </div>
    )
}
export default Posts