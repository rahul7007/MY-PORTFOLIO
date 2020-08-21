import React, { Component } from 'react';
import './Projects.css'
import image from './img/firstProject.png';
import ReactTooltip from 'react-tooltip'
import developer from './img/developer.gif';
import developer2 from './img/dev.gif'


class Projects extends Component {
    constructor(){
        super()
        this.state={
            frontSide: 'a',
            frontSideTwo: 'y',
            frontSideThree: 'z'
        }
    }

    icon = () =>{
        //alert("yyy")
        this.setState({
            frontSide: 'b'
        })
    }

    backIcon = () => {
        this.setState({
            frontSide:'a'
        })
    }

    render() {

        return (
          <React.Fragment>
            <div class="row" style={{border:'0px solid yellow'}}>
            <div class="col-sm-4">
                {
                  (this.state.frontSide === "a") ? <div style={{marginTop:'20px'}} >
                    <div class="card" style={{ width: "23rem", height: "28rem" }}>
                      <img src={image} class="card-img-top" alt="..." />
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h5 class="card-title" onClick={this.icon}>
                              Card title
                            </h5>
                            <p class="card-text">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </p>
                            {this.state.frontSide}
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons " onClick={this.icon}>
                              drag_indicator
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <div>
                    <div class="card" style={{ width: "23rem", height: "28rem", marginTop:'20px' }}>
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h4 class="card-title" onClick={this.backIcon}>
                              Accomplishments
                            </h4>
                            <p class="card-text">
                              <ul>
                                <li>Developed in MERN stack</li>
                                <li>Weather api will show the weather status</li>
                                <li>Qutes will be chenged on every page load</li>
                                <li>Designed in pure bootstrap</li>
                              </ul>
                            </p>
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons" onClick={this.backIcon}>
                              close
                            </span>
                          </div>
                          <span class="material-icons">
                          {/* new_releases */}
                          </span>
                        </div>
                        
                        <div class="bot" style={{left:0}}>
                          <hr />
                          {/* <br /> */}
                          <ReactTooltip />
                          <div class="row" style={{textAlign:'center'}}>
                            <div data-tip="View Source" class="col-sm-6 project-links" style={{textAlign:'center',border:'0px solid red'}}>
                              <a href="https://github.com/rahul7007/MY-PORTFOLIO" class="click"><i className="fa fa-github-alt" aria-hidden="true" /></a>
                            </div>
                            <div data-tip="View online" class="col-sm-6 project-links">
                              <a class="click"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                            </div>
                          </div>
                          </div>
                      </div>
                  </div> 
                </div>
                }
            </div>
            
            {/* Extra data */}
            <div class="col-sm-4">
                {
                  (this.state.frontSideTwo === "y") ? <div style={{marginTop:'20px'}} >
                    <div class="card" style={{ width: "23rem", height: "28rem" }}>
                      <img src={developer} class="card-img-top" alt="..." />
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h5 class="card-title" onClick={this.icon}>
                              Card title
                            </h5>
                            <p class="card-text">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </p>
                            {this.state.frontSide}
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons " onClick={this.icon}>
                              {/* drag_indicator */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <div>
                    <div class="card" style={{ width: "23rem", height: "28rem", marginTop:'20px' }}>
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h4 class="card-title" onClick={this.backIcon}>
                              Accomplishments
                            </h4>
                            <p class="card-text">
                              <ul>
                                <li>Developed in MERN stack</li>
                                <li>Weather api will show the weather status</li>
                                <li>Qutes will be chenged on every page load</li>
                                <li>Designed in pure bootstrap</li>
                              </ul>
                            </p>
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons" onClick={this.backIcon}>
                              close
                            </span>
                          </div>
                          <span class="material-icons">
                          {/* new_releases */}
                          </span>
                        </div>
                        
                        <div class="bot" style={{left:0}}>
                          <hr />
                          {/* <br /> */}
                          <ReactTooltip />
                          <div class="row" style={{textAlign:'center'}}>
                            <div data-tip="View Source" class="col-sm-6 project-links" style={{textAlign:'center',border:'0px solid red'}}>
                              <a href="https://github.com/rahul7007/MY-PORTFOLIO" class="click"><i className="fa fa-github-alt" aria-hidden="true" /></a>
                            </div>
                            <div data-tip="View online" class="col-sm-6 project-links">
                              <a class="click"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                            </div>
                          </div>
                          </div>
                      </div>
                  </div> 
                </div>
                }
            </div>
            {/* Extra one */}
            <div class="col-sm-4">
                {
                  (this.state.frontSideThree === "z") ? <div style={{marginTop:'20px'}} >
                    <div class="card" style={{ width: "23rem", height: "28rem" }}>
                      <img src={developer2} class="card-img-top" alt="..." />
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h5 class="card-title" onClick={this.icon}>
                              Card title
                            </h5>
                            <p class="card-text">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </p>
                            {this.state.frontSide}
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons " onClick={this.icon}>
                              {/* drag_indicator */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <div>
                    <div class="card" style={{ width: "23rem", height: "28rem", marginTop:'20px' }}>
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h4 class="card-title" onClick={this.backIcon}>
                              Accomplishments
                            </h4>
                            <p class="card-text">
                              <ul>
                                <li>Developed in MERN stack</li>
                                <li>Weather api will show the weather status</li>
                                <li>Qutes will be chenged on every page load</li>
                                <li>Designed in pure bootstrap</li>
                              </ul>
                            </p>
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons" onClick={this.backIcon}>
                              close
                            </span>
                          </div>
                          <span class="material-icons">
                          {/* new_releases */}
                          </span>
                        </div>
                        
                        <div class="bot" style={{left:0}}>
                          <hr />
                          {/* <br /> */}
                          <ReactTooltip />
                          <div class="row" style={{textAlign:'center'}}>
                            <div data-tip="View Source" class="col-sm-6 project-links" style={{textAlign:'center',border:'0px solid red'}}>
                              <a href="https://github.com/rahul7007/MY-PORTFOLIO" class="click"><i className="fa fa-github-alt" aria-hidden="true" /></a>
                            </div>
                            <div data-tip="View online" class="col-sm-6 project-links">
                              <a class="click"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                            </div>
                          </div>
                          </div>
                      </div>
                  </div> 
                </div>
                }
            </div>
            {/* End of extra */}
            </div>

            </React.Fragment>
         );
    }
}
 
export default Projects;