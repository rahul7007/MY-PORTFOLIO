import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './css/Login.css'
import { Link } from "react-router-dom";

class Login extends Component {

    onSubmit = () =>{
        this.props.history.push(`/adminHome`)
        //alert("Success")
    }

    render() { 

         return ( 
            <React.Fragment>
            </React.Fragment>
         );
    }
}
 
export default Login;
