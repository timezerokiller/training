import React, {useState, useEffect} from "react"
import {Col, Form, Button} from "react-bootstrap";
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
        <Col xs={12} md={6}>
            <h1>Редактировать</h1>
            <Form>
                <Form.Group className="mb-3" controlId="postForm.input">
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" placeholder="Название" value={post.title} onChange={(event) => {titleChange(event)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="postForm.textarea">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Описание" value={post.body} onChange={(event) => {bodyChange(event)}}/>
                </Form.Group>
                <Button onClick={
                    (event) => {
                        editClick(event)
                    }
                }>Отредиктировать</Button>
            </Form>
        </Col>
    )
}
export default Post


