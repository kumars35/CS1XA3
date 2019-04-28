import {Component} from "react";
import React from "react";
import {signIn} from "../api";

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    signIn = () => {
        let payload = {
            username: this.state.username,
            password: this.state.password
        };
        signIn(payload)
            .then(res => {
                localStorage.setItem('token', res.token);
                window.location = "/";
            })
            .catch(err => alert(err))
    };

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    render () {

        if(localStorage.getItem('token')){
            window.location = "/";
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <div className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control"
                                               placeholder="Username" required autoFocus
                                               onChange={this.handleUsernameChange}/>
                                            <label htmlFor="inputUsername">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control"
                                               placeholder="Password" required
                                               onChange={this.handlePasswordChange}/>
                                            <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                            type="submit"
                                            onClick={this.signIn}>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
