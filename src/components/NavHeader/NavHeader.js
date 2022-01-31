import React from "react"
import {Link} from "react-router-dom"

const NavHeader = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/posts">Статьи</Link>
        </nav>
    )
}

export default NavHeader