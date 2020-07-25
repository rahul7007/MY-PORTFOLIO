import React, { Component } from "react";
import api from "../api";
import "./css/Login.css";

class EditProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectIdArray: "",
      projectName: "",
      tech: "",
      description: "",
    };
  }

  componentDidMount() {
    api.getProjectsId().then((res) => {
      var project = res.data.data;
      var last = "";
      for (var i = 0; i < project.length; i++) {
        last = project[i].projectid;
      }
      this.setState({
        projectIdArray: parseInt(last) + 1,
      });
    });
  }

  add = () => {
    var projectid = this.state.projectIdArray;
    var projectname = this.state.projectName;
    var technology = this.state.tech;
    var description = this.state.description;
    const payload = { projectid, projectname, technology, description };
    api.insertProjectData(payload).then((res) => {
      console.log(res);
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { projectName, tech, description } = this.state;
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <span class="glyphicon glyphicon-bookmark"></span>Admin
                    Panel
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-6 col-md-6">
                      <a href="#">
                        <div
                          class="box"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Add
                        </div>
                      </a>
                    </div>
                    <div class="col-xs-6 col-md-6">
                      <div class="box">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add projects</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <form class="text-center border border-light p-5" action="#!">
                  <input
                    type="text"
                    id="defaultContactFormName"
                    class="form-control mb-4"
                    placeholder="id"
                    value={this.state.projectIdArray}
                  />

                  <input
                    name="projectName"
                    type="text"
                    id="defaultContactFormEmail"
                    class="form-control mb-4"
                    placeholder="Project Name"
                    onChange={this.onChange}
                    value={projectName}
                  />

                  <select
                    name="tech"
                    class="browser-default custom-select mb-4"
                    onChange={this.onChange}
                    value={tech}
                  >
                    <option value="" selected>
                      Choose option
                    </option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="IOT">IOT</option>
                  </select>

                  <div class="form-group">
                    <textarea
                      name="description"
                      class="form-control rounded-0"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      placeholder="Description"
                      onChange={this.onChange}
                      value={description}
                    ></textarea>
                  </div>

                  <button
                    class="btn btn-info btn-block"
                    type="submit"
                    onClick={this.add}
                  >
                    Add
                  </button>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditProjects;
