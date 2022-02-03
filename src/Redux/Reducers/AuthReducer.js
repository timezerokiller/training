const LOGIN_IN = "LOGIN_IN"

let initState = {
    auth: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_IN: {
            if(action.login == "Admin" && action.password == "123") {
                console.log(true)
                return {
                    ...state,
                    auth: true
                }
            } else {
                return state
            }
        }
        default: {
            return state
        }
    }
}

export const loginIn = (data) => ({
    type: LOGIN_IN,
    data
})

export default AuthReducer