import {Component} from "react";
import React from "react";

class Logout extends Component {
    render(){
        localStorage.clear();
        window.location = "/";

        return(<div/>)
    }
}

export default Logout
