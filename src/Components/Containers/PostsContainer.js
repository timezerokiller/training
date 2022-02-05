import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import Posts from "../Public/Posts/Posts"
import {setPosts, deletePost, setPage, setPostsLimit} from "../../Redux/Reducers/PostsReducer";




const PostsContainer = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        if(!props.posts) {
            props.setPosts()
        }
    },[])
    useEffect(() => {
        setPosts(props.posts)
    },[props.posts])



    return <Posts posts={posts} pagination={props.pagination} setPage={props.setPage} setPostsLimit={props.setPostsLimit}/>
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,
        pagination: state.PostsReducer.pagination,
    }
}

export default connect(mapStateToProps, {
    deletePost,
    setPosts,
    setPage,
    setPostsLimit
})(PostsContainer)