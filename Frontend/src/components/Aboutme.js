import React, { Component } from 'react';
import './Aboutme.css'
import avatar from './img/myavatar.png';


class About extends Component {
    render() { 
        return ( 
            <div class="container">
                <div class="row">
                    <div class="col-sm-1">
                    1
                    </div>
                    <div class="col-sm-3 aboutme-left-div">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="about-me-avatar"
                        />
                        <br /><br />
                        <div class="aboutme-cell">
                            C O N T A C T
                        </div>
                        <div class="about-me-details">
                        <table class="table-responsive">
                            <tr>
                                <td><i style={{ fontSize:'17px', color:'#999584'}} class="fa fa-map-marker" aria-hidden="true" /></td>
                                <td>Guwahati, Assam</td>
                            </tr>
                        
                            
                            {/* &nbsp;&nbsp;&nbsp; */}
                            
                            {/* <br /> */}
                            <tr>
                                <td><i style={{ fontSize:'17px', color:'#999584'}} class="fa fa-phone" aria-hidden="true" /></td>
                                <td>+91-9085895248</td>
                            </tr>
                            
                            {/* &nbsp;&nbsp;&nbsp; */}
                            
                            {/* <br /> */}
                            <tr>
                                <td><i style={{ fontSize:'17px', color:'#999584'}} class="fa fa-envelope" aria-hidden="true" /></td>
                                <td>rahul7007@gmail.com</td>
                            </tr>
                            
                            {/* &nbsp;&nbsp;&nbsp; */}
                            
                        </table>
                        </div>
                        <br />
                        <div class="aboutme-cell">
                            L A N G U A G E S
                        </div>
                        <div class="about-me-details">
                        <table class="table-responsive">
                            <tr>
                                <td>English</td>
                                <td>
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                </td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td>
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                </td>
                            </tr>
                            <tr>
                                <td>Assamese</td>
                                <td>
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                    <i style={{ fontSize:'8px', color:'#999584' }} class="fa fa-star" aria-hidden="true" />
                                </td>
                            </tr>

                            </table>
                        </div>
                        <br />
                        <div class="aboutme-cell">
                            S K I L L S
                        </div>
                        <div class="about-me-details">
                            <table class="table-responsive">
                                <tr>
                                    <td><i style={{ fontSize:'14px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" /></td>
                                    <td>Python</td>
                                </tr>
                                
                                {/* &nbsp;&nbsp;&nbsp; */}
                                <tr>
                                    <td><i style={{ fontSize:'14px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" /></td>
                                    <td>JavaScript</td>
                                </tr>    
                                {/* &nbsp;&nbsp;&nbsp; */}
                                <tr>
                                    <td><i style={{ fontSize:'14px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" /></td>
                                    <td>C++</td>
                                </tr>
                                {/* &nbsp;&nbsp;&nbsp; */}
                            
                                <tr>
                                    <td><i style={{ fontSize:'14px', color:'#999584'}} class="fa fa-circle" aria-hidden="true" /></td>
                                    <td>PHP</td>
                                </tr>
                                
                                {/* &nbsp;&nbsp;&nbsp; */}
                            </table>
                        </div>
                        <br />
                        <div class="aboutme-cell">
                            H O B B Y
                        </div>
                        <div class="row justify-content-md-center" style={{fontSize:'10px', color:'cornsilk', fontFamily: 'Caveat Brush'}}>
                            <div class="col-md-auto" style={{border:'0px solid'}} >
                            Music
                            <br />
                            <i style={{fontSize:'17px'}} class="fa fa-music" aria-hidden="true" />
                            </div>
                            <div class="col-md-auto" style={{border:'0px solid'}} >
                            Cricket
                            <br />
                            <i style={{fontSize:'17px'}} class="fa fa-gamepad" aria-hidden="true" />
                            </div>
                            <div class="col-md-auto" style={{border:'0px solid'}} >
                            Photography
                            <br />
                            <i style={{fontSize:'17px'}} class="fa fa-camera-retro" aria-hidden="true" />
                            </div>
                            <div class="col-md-auto" style={{border:'0px solid'}} >
                            Travel
                            <br />
                            <i style={{fontSize:'17px'}} class="fa fa-plane" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1" style={{border:'0px solid white'}}>
                    
                    </div>
                    {/***************************** Right div ******************************/}
                    <div class="col-sm-6" style={{border:'1px dotted yellow', textAlign:"justify", color: 'wheat'}}>
                    <br />
                    <div>
                        <h3 class="heading">
                            RAHUL SARMA
                        </h3>
                    </div>
                    <div>
                        <h6 class="heading">
                            SOFTWARE DEVELOPER
                        </h6>
                    </div>
                    <br />
                    <div className="aboutme-heading" >
                        <p style={{marginBottom:'-10px'}}>
                            <b>EDUCATION (google analytics, 2 factor authentication)</b>
                        </p>
                        <hr class="break" />
                    </div>
                    <div className="aboutme-description">
                    <div class="row">
                        <div class="col-4">
                            <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-mca-list" data-toggle="list" href="#list-mca" role="tab" aria-controls="mca">MCA</a>
                            <a class="list-group-item list-group-item-action" id="list-bca-list" data-toggle="list" href="#list-bca" role="tab" aria-controls="bca">BCA</a>
                            <a class="list-group-item list-group-item-action" id="list-hs-list" data-toggle="list" href="#list-hs" role="tab" aria-controls="hs">HS</a>
                            <a class="list-group-item list-group-item-action" id="list-hslc-list" data-toggle="list" href="#list-hslc" role="tab" aria-controls="hslc">HSLC</a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-mca" role="tabpanel" aria-labelledby="list-mca-list">
                                * 2016-19 *
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            <div class="tab-pane fade" id="list-bca" role="tabpanel" aria-labelledby="list-bca-list">
                                * 2012-15 *
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            <div class="tab-pane fade" id="list-hs" role="tabpanel" aria-labelledby="list-hs-list">
                                * 2010-12 *
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            <div class="tab-pane fade" id="list-hslc" role="tabpanel" aria-labelledby="list-hslc-list">
                                * 2010 *
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="aboutme-heading">
                        <p style={{marginBottom:'-10px'}}>
                            <b>WORK EXPERIENCE</b>
                        </p>
                        <hr class="break" />
                    </div>
                    <div className="aboutme-description">
                        <ul class="listStyle">
                            <li>6 months internship in roboshala</li>
                            <li>Working as a software developer at BoldTek India Pvt. Ltd.</li>
                        </ul>
                    </div>
                    <br />
                    <div className="aboutme-heading">
                        <p style={{marginBottom:'-10px'}}>
                            <b>ACHIEVEMENTS</b>
                        </p>
                        <hr class="break" />
                    </div>
                    <div className="aboutme-description">
                        <ul class="listStyle">
                            <li>Gold star in HackerRank</li>
                            <li>Sliver star in HackerRank</li>
                        </ul>
                        <br />
                    </div> 
                    {/***************************** Right div ******************************/}
                    </div>
                    <div class="col-sm-1" style={{}}>
                    YY
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;