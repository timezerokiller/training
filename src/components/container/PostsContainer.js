import React, {useEffect} from "react"
import {connect} from "react-redux"
import Posts from "../Posts"
import {setPosts, deletePost} from "../../redux/Reducers/PostsReducer";

const PostsContainer = (props) => {
    useEffect(()=>{
        props.setPosts()
    },[])

    return (
        <Posts {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts
    }
}

export default connect(mapStateToProps, {
    deletePost,
    setPosts
})(PostsContainer)