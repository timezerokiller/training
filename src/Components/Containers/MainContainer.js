import React, {useEffect} from "react"
import {connect} from "react-redux"
import Main from "../Public/Main"
import {loginIn, checkLogin} from "../../Redux/Reducers/AuthReducer"
import {setPosts} from "../../Redux/Reducers/PostsReducer"

const MainContainer = (props) => {


    useEffect(() => {
        props.checkLogin()
    }, [props.auth])



    return (
        <Main/>
    )
}

const mapStateToProps = (state) => ({
    auth: state.AuthReducer.auth,
    posts: state.PostsReducer.posts
})

export default connect(mapStateToProps, {checkLogin, setPosts})(MainContainer)