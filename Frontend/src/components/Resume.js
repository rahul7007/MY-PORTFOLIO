import React, { Component } from 'react';
import temp from './img/upderConstruction.png';
import './Contact.css'
import api from "../api";

class Resume extends Component {
    constructor(){
        super()
        this.state={
            time: new Date(),
            alias: '',
            org: '',
            email: '',
            phone:'',
            message: ''
        }
    }

    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    messageSendButton = () =>{
        var From = this.state.alias
        var Organization = this.state.org
        var Email = this.state.email
        var Phone = this.state.phone
        var Message = this.state.message
        const payload = {From, Organization, Email, Phone, Message};
        api.sendTextMessage(payload).then((res =>{
            //alert(res.data)
            alert(From)
            alert(Organization)
            alert(Email)
            alert(Phone)
            alert(Message)
        }))
    }

    render() {

        return (
            <div class = "container contact-form">
                <div class="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                </div>
                <form>
                <h3>Drop Your Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input 
                                type="text" 
                                id="alias"
                                class="form-control" 
                                name="alias" 
                                placeholder="Name*" 
                                onChange={this.onChange} 
                                value={this.state.alias} 
                            />
                        </div>
                        <div class="form-group">
                            <input 
                                type="text" 
                                id="org"
                                class="form-control" 
                                name="org" 
                                placeholder="Organization" 
                                onChange={this.onChange} 
                                value={this.state.org} 
                            />
                        </div>
                        <div class="form-group">
                            <input 
                                type="text" 
                                id="email"
                                class="form-control" 
                                name="email" 
                                placeholder="Email*"
                                onChange={this.onChange} 
                                value={this.state.email}
                            />
                        </div>
                        <div class="form-group">
                            <input 
                                type="text" 
                                id="phone"
                                class="form-control" 
                                name="phone" 
                                placeholder="Phone*"
                                onChange={this.onChange} 
                                value={this.state.phone} 
                            />
                        </div>
                        <div class="form-group">
                            {/* <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" /> */}
                            <button class="btnContact" onClick={this.messageSendButton}>Send Message</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea 
                                id="message"
                                name="message"
                                class="form-control"
                                placeholder="Your Message *" 
                                style={{width: '100%', height: '150px'}}
                                onChange={this.onChange} 
                                value={this.state.message}
                            textarea />
                        </div>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}
 
export default Resume;