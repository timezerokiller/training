import React, {useEffect} from "react"
import {connect} from "react-redux"
import Logout from "../Public/Auth/Logout"
import Cookies from "js-cookie";
import {loginOut} from "../../Redux/Reducers/AuthReducer"




const LogoutContainer = (props) => {

    return (
        <Logout/>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.auth
    }
}



export default connect(mapStateToProps, {loginOut})(LogoutContainer)