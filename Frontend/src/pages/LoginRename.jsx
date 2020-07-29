import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
//import './css/Login.css'
import { Link } from "react-router-dom";

class Login extends Component {

    onSubmit = () =>{
        this.props.history.push(`/adminHome`)
        //alert("Success")
    }

    render() { 

         return ( 
            <React.Fragment>
                <div id="login">
                    <div class="container">
                        <div id="login-row" class="row justify-content-center align-items-center">
                            <div id="login-column" class="col-md-6">
                                <div id="login-box" class="col-md-12">
                                    <form id="login-form" class="form" action="" method="post">
                                        <h3 class="text-center text-info">Login</h3>
                                        <div class="form-group">
                                            <label for="username" class="text-info">Username:</label><br></br>
                                            <input type="text" name="username" id="username" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="text-info">Password:</label><br></br>
                                            <input type="text" name="password" id="password" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label for="remember-me" class="text-info"><span>Remember me</span> 
                                                <span>
                                                    <input id="remember-me" name="remember-me" type="checkbox" />
                                                </span>
                                            </label>
                                            <br></br>
                                            {/* <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" onClick = {this.go} /> */}
                                            <Link type="submit" className="btn btn-info btn-md" onClick={this.onSubmit}>Login</Link>
                                        </div>
                                        <div id="register-link" class="text-right">
                                            <a href="#" class="text-info">Register here</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;
