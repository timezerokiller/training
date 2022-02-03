import {connect} from "react-redux"
import Login from "../Public/Login"
import {loginIn} from "../../Redux/Reducers/AuthReducer"



const LoginContainer = (props) => {
    return (
        <Login loginIn={props.loginIn}/>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.auth
    }
}



export default connect(mapStateToProps, {loginIn})(LoginContainer)