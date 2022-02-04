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
                    {!props.error.login
                        ? <p className="text-muted">
                            Логин: Admin
                        </p>
                        : <p className="text-danger">
                            Неверный логин
                        </p>
                    }

                    <input type="password" placeholder="Пароль" onChange={(e) => {
                        ChangePassword(e)
                    }}/>
                    {!props.error.password
                        ? <p className="text-muted">
                            Пароль: 123
                        </p>
                        : <p> className="text-danger">
                            Неверный пароль
                        </p>
                    }
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