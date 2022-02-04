import React from "react"
import {connect} from "react-redux"
import NavHeader from "../NavHeader/NavHeader"
import {loginOut} from "../../Redux/Reducers/AuthReducer"

const NavHeaderContainer = (props) => {
    return (
        <NavHeader auth={props.auth} loginOut={props.loginOut}/>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.auth
    }
}

export default connect(mapStateToProps, {loginOut})(NavHeaderContainer)

