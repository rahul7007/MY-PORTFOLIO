import React, { Component } from "react";
import {Table, Button} from 'react-bootstrap';
import api from "../api";
import "./css/Login.css";
import 'font-awesome/css/font-awesome.min.css';

var projectDetailsArray = []
class EditProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectIdArray: "",
      projectName: "",
      tech: "",
      description: "",
      displayId: '',
      displayName: [],
      displayTech: '',
      displayDesc: '',
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

    api.displayProjectData().then((res) =>{
      projectDetailsArray = (res.data.data)
      // for(var i=0; i<res.data.data.length; i++){
      //   displayprojectId.push(res.data.data[i].projectid)
      //   displayprojectName.push(res.data.data[i].projectname)
      //   displayprojectTech.push(res.data.data[i].technology)
      //   displayprojectDesc.push(res.data.data[i].description)
      // }
    })

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
    console.log(projectDetailsArray)
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
                        <div
                          class="box"
                          data-toggle="modal"
                          data-target="#addModal"
                        >
                          Add
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-6">
                        <div
                          class="box"
                          data-toggle="modal"
                          data-target="#editModal"
                        >
                          Edit
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="addModal">
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

        {/* EDIT */}

        <div class="modal fade" id="editModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Edit projects</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Technology</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.projectIdArray-1}</td>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                      </td>
                  </tr>
                  
                  {
                    projectDetailsArray.map(data=>(
                    <tr>
                      <td>{data.projectid}</td>
                      <td>{data.projectname}</td>
                      <td>{data.technology}</td>
                      <td>{data.description}</td>
                      <td>icon
                      </td>
                    </tr> ))
                  }

                    {/* {displayprojectName.map(data=>(
                   <tr>
                    
                      <td>{data}</td>
                      
                  </tr> ))
                    } */}
                  
                </tbody>
              </Table>
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
        <Button onClick={this.test}>Test Get Api</Button>
      </React.Fragment>
    );
  }
}

export default EditProjects;
