import React, { Component } from 'react';
import './Aboutme.css'
import avatar from './img/myavatar.png';


class About extends Component {
    render() { 
        return ( 
            <div class="container">
                <div style={{color:'yellow'}}>
                <div class="row">
                    <div class="col-sm-1" style={{backgroundColor:'', height:'500px'}}>
                    XXXXXX
                    </div>
                    <div class="col-sm-3" className="aboutme-left-div" style={{backgroundColor:'yellow'}}>
                    <img
                        src={avatar}
                        alt="avatar"
                        className="about-me-avatar"
                    />
                    </div>
                    <div class="col-sm-1">
                    XXXXX
                    </div>
                    <div class="col-sm-6" style={{backgroundColor:'pink'}}>
                    Sed ut perspiciatis...
                    </div>
                    <div class="col-sm-1">
                    XXXXX
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default About;