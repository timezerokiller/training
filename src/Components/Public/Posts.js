import React from "react"
import style from "../style/Posts.module.css"
import {Link} from "react-router-dom"
import {Pagination, Col, Button} from "react-bootstrap"


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
                <Pagination.Item key={page} active={page === props.pagination.page} onClick={(e) => {props.clickPage(page)}}>
                    {page}
                </Pagination.Item>,
            );
        }

    }

    const pagination = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )


    PagePosts === null
        ? posts = <h1>Загрузка...</h1>
        : posts = PagePosts.map(posts =>
            <div className={style.item} key={posts.id}>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
                <Button variant="success"><Link style={{color: "white", textDecoration: "none"}} to={"/posts/" + posts.id}>Редактировать</Link></Button>
                <Button variant="danger" onClick={() => {
                    props.deletePost(posts.id)
                }}>Удалить
                </Button>
            </div>
        )

    return (
        <Col xs={12} md={6}>
            <h1>Статьи</h1>
            {posts}
            {pagination}
        </Col>
    )
}
export default Posts