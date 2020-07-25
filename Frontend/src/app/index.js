import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from '../components/Home'
import { About } from '../components/About'
import { NoMatch } from '../components/NoMatch'
import Login from '../pages/Login'
import AdminHome from '../pages/adminHome'
import EditProjects from '../pages/editProjects'
import { Layout } from '../components/Layout'
import { NavigationBar } from '../components/NavigationBar'

function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <Layout>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>

            <Router>
                <Route path="/admin" exact component={Login} />
                <Route path="/adminHome" exact component={AdminHome} />
                <Route path="/editProjects" exact component={EditProjects} />
            </Router>
        </React.Fragment>
    )
}

export default App