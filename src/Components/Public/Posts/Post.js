import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

const Post = (props) => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        body: ''
    })

    let navigate = useNavigate()

    useEffect(() => {
        if (props.post != null) {
            setPost({
                id: props.post.id,
                title: props.post.title,
                body: props.post.body
            })
        }
    }, [props.post])

    const titleChange = (event) => {
        setPost({
            ...post,
            title: event.target.value,
        })
    }
    const bodyChange = (event) => {
        setPost({
            ...post,
            body: event.target.value,
        })
    }

    const editClick = (event) => {
        props.setPost(post)
        navigate('/posts')
        event.preventDefault()
    }


    if (props.post === null) {
        return <div>
            <h1>Загрузка...</h1>
        </div>
    }

    return (
        <div>
            <h1>Редактировать</h1>
            <form>
                <input type="text" placeholder="Название" value={post.title} onChange={(event) => {
                    titleChange(event)
                }}/>
                <input as="textarea" rows={3} placeholder="Описание" value={post.body} onChange={(event) => {
                    bodyChange(event)
                }}/>
                <button onClick={
                    (event) => {
                        editClick(event)
                    }
                }>Отредиктировать
                </button>
            </form>
        </div>
    )
}
export default Post


