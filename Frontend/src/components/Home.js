import React, { Component } from 'react';
import avatar from './img/myavatar.png';
import './Home.css'

class Home extends Component {
    render() { 
        return ( 
            <div class="container">
                <img 
                    src={avatar}
                    alt="avatar"
                    className="home-avatar"
                />
                <div className = "tag-line">
                    Welcome to My Profile
                </div>
                <hr className="hr-design"/>
                <div class= "row social-profile">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1">
                    <a href="https://www.linkedin.com/in/rahul-sarma-9348a0187/" rel="noopener norefferer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    </div>
                    <div class="col-sm-1">
                    <a href="https://github.com/rahul7007" rel="noopener norefferer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                    </div>
                    <div class="col-sm-1">
                    <a href="https://www.hackerrank.com/Rahul_Sarma" rel="noopener norefferer" target="_blank">
                        <i class="fa fa-code" aria-hidden="true"></i>
                    </a>
                    </div>
                    <div class="col-sm-1">
                    <a href="https://www.youtube.com" rel="noopener norefferer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
         );
    }
}
 
export default Home;