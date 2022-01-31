import React from "react"
import style from "./style/Posts.module.css"
import {Link} from "react-router-dom"

const Posts = (props) => {


    let arrPages = []
    let AllPagePosts = null
    let PagePosts = null


    console.log(props)

    const sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res
    }

    if(props.posts) {
        AllPagePosts = sliceIntoChunks(props.posts, props.pagination.limit)
        console.log(AllPagePosts)
        PagePosts = AllPagePosts[props.pagination.page]
        for(let i = 0; i < AllPagePosts.length; i++) {
            arrPages.push(i)
        }

    }

    let posts

    PagePosts === null
        ? posts = "Loading..."
        : posts = PagePosts.map(posts =>
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
            <div>{arrPages.map(page => <button key={page} onClick={(e) => {props.clickPage(page)}}>{page}</button>)}</div>
        </div>
    )
}
export default Posts