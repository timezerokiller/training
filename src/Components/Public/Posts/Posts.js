import React from "react"
import {Link} from "react-router-dom"


const Posts = (props) => {


    let items = []
    let AllPagePosts = null
    let PagePosts = null
    let posts


    const sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res
    }

    if (props.posts) {
        AllPagePosts = sliceIntoChunks(props.posts, props.pagination.limit)
        PagePosts = AllPagePosts[props.pagination.page]
        for (let page = 1; page < PagePosts.length; page++) {
            items.push(
                <span key={page} active={page === props.pagination.page} onClick={(e) => {props.clickPage(page)}}>
                    {page}
                </span>,
            );
        }

    }

    const pagination = (
        <div>
            <span>{items}</span>
        </div>
    )


    PagePosts === null
        ? posts = <h1>Загрузка...</h1>
        : posts = PagePosts.map(posts =>
            <div className="mb-3" key={posts.id}>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
                <Link className="m-2" to={"/posts/" + posts.id}><button variant="success">Редактировать</button></Link>
                <button variant="danger" onClick={() => {
                    props.deletePost(posts.id)
                }}>Удалить
                </button>
            </div>
        )

    return (
        <div>
            <h1>Статьи</h1>
            {posts}
            {pagination}
        </div>
    )
}
export default Posts