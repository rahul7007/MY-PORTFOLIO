import React, { Component } from 'react';
import './Projects.css'
import image from './img/firstProject.png';


class Projects extends Component {
    constructor(){
        super()
        this.state={
            frontSide: 'b'
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
            <div>
                {
                  (this.state.frontSide === "a") ? <div style={{marginTop:'30px'}} >
                    <div class="card" style={{ width: "18rem", height: "25rem" }}>
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
                    <div class="card" style={{ width: "18rem", height: "25rem" }}>
                      <div class="card-body abc">
                        <div class="row">
                          <div class="col-sm-10 abc">
                            <h4 class="card-title" onClick={this.backIcon}>
                              Accomplishments
                            </h4>
                            <p class="card-text">
                              <ul>
                                <li>ABC</li>
                                <li>XYZ</li>
                                <li>MNO</li>
                              </ul>
                            </p>
                          </div>
                          <div class="col-sm-2 xyz">
                            <span class="material-icons" onClick={this.backIcon}>
                              reorder
                            </span>
                          </div>
                            {/* <hr style={{height:'20px'}} /> */}
                          .............................................................................
                          <span class="material-icons">
                          new_releases
                          </span>
                        </div>
                        <span class='your-div'>
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                }
            </div>
         );
    }
}
 
export default Projects;