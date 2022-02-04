import React, {useEffect} from "react"
import {connect} from "react-redux"
import Posts from "../Public/Posts/Posts"
import {setPosts, deletePost, setPage} from "../../Redux/Reducers/PostsReducer";

const PostsContainer = (props) => {
    useEffect(()=>{
        if(!props.posts) {
            props.setPosts()
        }
    },[])

    const clickPage = (page) => {
        props.setPage(page)
    }

    return (
        <Posts {...props} clickPage={clickPage}/>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,
        pagination: state.PostsReducer.pagination
    }
}

export default connect(mapStateToProps, {
    deletePost,
    setPosts,
    setPage
})(PostsContainer)