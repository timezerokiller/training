import React, {useState} from "react"

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const ChangeLogin = (e) => {
        setLogin(e.target.value)
    }
    const ChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const ClickLogin = (e) => {
        props.loginIn({
            login: login,
            password: password
        })
        e.preventDefault()
    }


    return (
        <div>
            <h1>Логин</h1>
            <form>
                    <input type="text" placeholder="Введите логин" onChange={(e) => {
                        ChangeLogin(e)
                    }}/>

                    <input type="password" placeholder="Пароль" onChange={(e) => {
                        ChangePassword(e)
                    }}/>
                <button type="submit" onClick={(e) => {
                    ClickLogin(e)
                }}>
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default Login