import {Component} from "react";
import React from "react";
import {registerUser} from "../api";

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            cpassword:'',
        }
    }

    handleSignUp = () => {
        if(this.state.password !== this.state.cpassword ){
            alert("Password don't match")
        }
        let payload = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        registerUser(payload)
            .then(res => {
                alert(JSON.stringify(res));
                window.location = "/";
            })
            .catch(err => alert(err))
    };

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    handleCPasswordChange = (event) => {
        this.setState({cpassword: event.target.value})
    };


    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign Up</h5>
                                <div className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control"
                                               placeholder="Username" required autoFocus
                                               onChange={this.handleUsernameChange}
                                        />
                                        <label htmlFor="inputUsername">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control"
                                               placeholder="Email Address" required autoFocus
                                               onChange={this.handleEmailChange}
                                        />
                                        <label htmlFor="inputEmail">Email Address</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control"
                                               placeholder="Password" required
                                               onChange={this.handlePasswordChange}
                                        />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputCPassword" className="form-control"
                                               placeholder="Confirm Password" required autoFocus
                                               onChange={this.handleCPasswordChange}
                                        />
                                        <label htmlFor="inputCPassword">Confirm Password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                            type="submit" onClick={this.handleSignUp}>Sign Up
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

export default SignUp
