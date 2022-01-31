import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"
import {getPost, UpdPost, setPost} from "../../redux/Reducers/PostsReducer";
import Post from "../Post"

const PostContainer = (props) => {
    const {id} = useParams();

    useEffect(() => {
        props.getPost(id)
    }, [])

    return (
        <Post post={props.post}  UpdPost={props.UpdPost} setPost={props.setPost}/>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.PostsReducer.post,
    }
}

export default connect(mapStateToProps, {
    setPost,
    UpdPost,
    getPost
})(PostContainer)