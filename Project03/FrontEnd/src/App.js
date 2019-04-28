import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Logout from "./components/Logout";
import Orders from "./components/Orders";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route exact={true} path='/' component={Home}/>
                        <Route exact={true} path='/signin' component={SignIn}/>
                        <Route exact={true} path='/signup' component={SignUp}/>
                        <Route exact={true} path='/logout' component={Logout}/>
                        <Route exact={true} path='/orders' component={Orders}/>
                        <Route path='/restaurant/:restaurantId' component={Restaurant}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
