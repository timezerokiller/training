import {connect} from "react-redux"
import Login from "../Public/Auth/Login"
import {loginIn} from "../../Redux/Reducers/AuthReducer"



const LoginContainer = (props) => {
    console.log(props)
    return (
        <Login />
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.auth,
        error: state.AuthReducer.error
    }
}



export default connect(mapStateToProps, {loginIn})(LoginContainer)