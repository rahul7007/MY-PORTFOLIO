import React, { Component } from 'react';
import './Navbar.css'
import Clock from '../components/Clock'

class Navbar extends Component {
    render() { 
        return ( 
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light"> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" style={{color: 'white'}}>My Portfolio</a>
                    </li>
                    </ul>
                    <span style={{color:'white', textAlign:'right'}}>
                        {/* <a class="nav-link navbar-text" href="/" style={{color: 'white'}}>My Portfolio</a> */}
                        <a class="nav-link navbar-text" href="/resume" style={{color: 'white'}}>Resume</a>
                        <a class="nav-link navbar-text" href="/projects" style={{color: 'white'}}>Projects</a>
                        <a class="nav-link navbar-text" href="/about" style={{color: 'white'}}>Aboutme</a>
                        <a class="nav-link navbar-text" href="/contact" style={{color: 'white'}}>Contact</a>
                        <br />
                        <Clock />
                    </span>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;


// style={{color: 'white'}}

