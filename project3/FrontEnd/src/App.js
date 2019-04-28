import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Restaurant from "./components/Restaurant";
import Logout from "./components/Logout";
import Orders from "./components/Orders";
import {Nav, Navbar} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <div>
                        <Navbar bg="light">
                            <Navbar.Brand href="/">Order Food</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink className='navlink' to="/">Home</NavLink>
                                    <NavLink className='navlink' to="/signin">Sign In</NavLink>
                                    <NavLink className='navlink' to="/signup">Sign Up</NavLink>
                                    <NavLink className='navlink' to="/orders">My Orders</NavLink>
                                    <NavLink className='navlink' to="/logout">Logout</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path='/logout' component={Logout}/>
                            <Route path='/orders' component={Orders}/>
                            <Route path='/restaurant/:restaurantId' component={Restaurant}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
