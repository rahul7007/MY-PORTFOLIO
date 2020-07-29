import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/Aboutme'


import AdminHome from '../pages/adminHome'
import EditProjects from '../pages/editProjects'

function App() {
    return (
        <React.Fragment>
        <div class="container" style = {{ border:'2px solid yellow'}}>
            <Navbar />
        
        {/* <div style = {{ border:'2px solid blue'}}> */}
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                       {/* <Route component={NoMatch} /> */}
                    </Switch>
                </Router>

            <Router>
                {/* <Route path="/admin" exact component={Login} /> */}
                <Route path="/adminHome" exact component={AdminHome} />
                <Route path="/editProjects" exact component={EditProjects} />
            </Router>
            </div>
        {/* </div> */}
        </React.Fragment>
    )
}

export default App