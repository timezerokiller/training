import Cookies from 'js-cookie'

const LOGIN_IN = "LOGIN_IN"
const LOG_OUT = "LOG_OUT"
const CHECK_LOGIN = "CHECK_LOGIN"

let initState = {
    auth: false,
    error: {
        login: null,
        password: null
    }
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_IN: {
            let login = action.data.login.toLowerCase()
            let error
            if(login !== "admin") {
                error = {
                    ...error,
                    login: true
                }
            }
            if (action.data.password !== "123") {
                error = {
                    ...error,
                    password: true
                }
            }
            if(!error) {
                Cookies.set('Login', true)
                return {
                    ...state,
                    auth: true
                }
            } else {
                return {
                    ...state,
                    error: error
                }
            }
        }
        case CHECK_LOGIN: {
            let login = Cookies.get('Login')
            if(login === 'true') {
                return {
                    ...state,
                    auth: true
                }
            } else {
                return state
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                auth: false
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
export const checkLogin = () => ({
    type: CHECK_LOGIN
})
export const loginOut = () => ({
    type: LOG_OUT
})

export default AuthReducer