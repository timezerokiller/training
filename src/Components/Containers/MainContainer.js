import React, {useEffect} from "react"
import {connect} from "react-redux"
import Main from "../Public/Main"
import {loginIn, checkLogin} from "../../Redux/Reducers/AuthReducer"

const MainContainer = (props) => {


    useEffect(() => {
        props.checkLogin()
    }, [props.auth])


    return (
        <Main/>
    )
}

const mapStateToProps = (state) => ({
    auth: state.AuthReducer.auth
})

export default connect(mapStateToProps, {checkLogin})(MainContainer)