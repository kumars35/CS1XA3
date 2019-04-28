import {Component} from "react";
import React from "react";

class Logout extends Component {
    render(){
        localStorage.clear();
        window.location.hash = "";

        return(<div/>)
    }
}

export default Logout
