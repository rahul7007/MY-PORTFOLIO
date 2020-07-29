import React, { Component } from 'react';
import temp from './img/upderConstruction.png';
import './Contact.css'

class Contact extends Component {
    render() { 
        return ( 
            <div>
                <img 
                    src={temp}
                    className = "contact-construction"
                /> 
            </div>
         );
    }
}
 
export default Contact;