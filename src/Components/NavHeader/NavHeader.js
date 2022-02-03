import React from "react"
import {Link} from "react-router-dom"
import {Navbar, Container, Nav} from "react-bootstrap"

const NavHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Блог</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Главная</Link>
                        <Link to="/posts">Статьи</Link>
                        <Link to="/todo">Задачи</Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link to="/login">Войти</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavHeader