import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"
import {getPost, UpdPost} from "../../redux/Reducers/PostsReducer";
import Post from "../Post"

const PostContainer = (props) => {
    const {id} = useParams();

    useEffect(() => {
        props.getPost(id)
    }, [])

    return (
        <Post post={props.post}  UpdPost={props.UpdPost}/>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.PostsReducer.post,
    }
}

export default connect(mapStateToProps, {
    UpdPost,
    getPost
})(PostContainer)