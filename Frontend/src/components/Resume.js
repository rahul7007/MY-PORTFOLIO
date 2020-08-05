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
            sub: '',
            message: ''
        }
    }

    // onChange = (event) =>{
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     });
    // }

    // messageSendButton = () =>{
    //     var From = this.state.alias
    //     var Message = this.state.message
    //     const payload = { From, Message};
    //     api.sendTextMessage(payload).then((res =>{
    //         alert(res.data)
    //         alert(From)
    //         alert(Message)
    //     }))
    // }


    render() {

        return (
            <div className="container">
                <div style={{height:'400px',width:'600px', backgroundColor:'yellow', borderRadius:'50px', margin:'auto'}}>
                    {/* </div>  */}
                    <div class="row">
                        <div class="col-sm-2" style={{backgroundColor:'yellow'}}></div>


                        <div class="col-sm-8" style={{backgroundColor:'pink'}}>
                            <input type="text" id="alias" name="alias" placeholder="Name" onChange={this.onChange} value={this.state.alias} />
                            <br />

                            <input type="text" id="org" name="org" placeholder="Organization" onChange={this.onChange} value={this.state.org} />
                            <br />

                            <input type="text" id="email" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email} />
                            <br />

                            <input type="text" id="sub" name="sub" placeholder="Subject" onChange={this.onChange} value={this.state.sub} />
                            <br />

                            <textarea id="message" name="message" onChange={this.onChange} value={this.state.message} />
                            <br />
                            <button onClick={this.messageSendButton}>Send Message</button>
                        </div>


                        <div class="col-sm-2" style={{backgroundColor:'yellow'}}></div>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Resume;