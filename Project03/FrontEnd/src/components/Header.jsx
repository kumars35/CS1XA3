import {Component} from "react";
import React from "react";
import {Nav, Navbar} from "react-bootstrap";

class Header extends Component{
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Order Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/orders">My Orders</Nav.Link>
                        <Nav.Link href="/signin">SignIn</Nav.Link>
                        <Nav.Link href="/signup">SignUp</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header
