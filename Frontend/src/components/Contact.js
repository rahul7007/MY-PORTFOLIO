import React, { Component } from 'react';
import temp from './img/upderConstruction.png';
import './Contact.css'

class Contact extends Component {
    render() { 
        return ( 
            // <div>
            //     <img 
            //         src={temp}
            //         className = "contact-construction"
            //     /> 
            // </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-1" style={{backgroundColor:'red', height:'500px'}}>
                    1
                    </div>
                    <div class="col-sm-3" style={{backgroundColor:'yellow'}}>
                        {/* <img
                            src={avatar}
                            alt="avatar"
                            className="about-me-avatar"
                        />
                        <div class="row">
                            <div class="col-sm-2" style={{border:'1px solid black'}}>
                                
                            </div>
                            <div class="col-sm-8" class="aboutme-cell"  style={{border:'1px solid red'}}>
                                CONTACT
                            </div>
                            <div class="col-sm-2" style={{border:'1px solid black'}}>
                                
                            </div>
                        </div> */}
                        3
                    </div>
                    <div class="col-sm-1" style={{backgroundColor:'white', height:'500px'}}>
                    1
                    </div>
                    <div class="col-sm-6" style={{backgroundColor:'pink'}}>
                    6
                    </div>
                    <div class="col-sm-1" style={{backgroundColor:'red'}}>
                    1
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;