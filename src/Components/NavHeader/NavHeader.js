import React from "react"
import {Link} from "react-router-dom"
import style from "../../Style/NavHeader.module.css"
import Cookies from "js-cookie";


const NavHeader = (props) => {

    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/posts">Статьи</Link>
            <Link to="/todo">Задачи</Link>
            {props.auth === true ?
                <Link to="/logout"><button onClick={(e) => {
                    props.loginOut()
                    Cookies.set('Login', false)
                }} className="btn-danger">Выйти</button>
                </Link>
                :
                <Link to="/login"><button>Войти</button></Link>}
        </nav>
    )
}

export default NavHeader