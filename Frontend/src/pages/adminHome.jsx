import React, { Component } from "react";
import './css/adminHome.css'

class AdminHome extends Component {
    render() {
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h3 class="panel-title">
                                    <span class="glyphicon glyphicon-bookmark"></span>Admin Panel</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-xs-6 col-md-6">
                                            <a href="/editProjects">
                                            <div class="box">
                                                About
                                            </div>
                                            </a>
                                        {/* <a href="#" class="btn btn-danger btn-lg" role="button"><span class="glyphicon glyphicon-list-alt"></span> <br/>About</a> */}
                                        </div>
                                        <div class="col-xs-6 col-md-6">
                                        <div class="box">
                                                <p>Projects</p>
                                            </div>
                                        {/* <a href="#" class="btn btn-warning btn-lg" role="button"><span class="glyphicon glyphicon-bookmark"></span> <br/>Projects</a> */}
                                        </div>
                                    </div>
                                    {/* <a href="http://www.jquery2dotnet.com/" class="btn btn-success btn-lg btn-block" role="button"><span class="glyphicon glyphicon-globe"></span> Website</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AdminHome;