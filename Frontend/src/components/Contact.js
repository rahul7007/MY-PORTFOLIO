import React, { Component } from 'react';
import temp from './img/upderConstruction.png';
import './Contact.css'
import api from "../api";

class Contact extends Component {
    constructor(){
        super()
        this.state={
            time: new Date(),
            alias: '',
            message: ''
        }
    }
    // componentWillMount(){
    //     setInterval(()=>
    //         this.currentTime(), 1000        
    //     )
    // }

    // currentTime(){
    //     this.setState({
    //         time: new Date()
    //     })
    // }

    // click = () =>{
    //     var url = "http://api.openweathermap.org/data/2.5/weather?appid=f196e1c1651f97563f531c7f465d8252&q="
    //     var city = "guwahati"
    //     url = url + city
    //     fetch(url).then(response =>{
    //         return response.json()
    //     }).then(data=>{
    //         console.log(data.main.humidity)
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }

    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    messageSendButton = () =>{
        var From = this.state.alias
        var Message = this.state.message
        const payload = { From, Message};
        api.sendTextMessage(payload).then((res =>{
            alert(res.data)
            alert(From)
            alert(Message)
        }))
    }


    render() { 
        console.log(this.state.alias)
        console.log(this.state.message)

        return (
            <div>
                <label>Enter your name</label>
                <input type="text" id="alias" name="alias" onChange={this.onChange} value={this.state.alias} />
                <br />
                <label>Message</label>
                <input type="text" id="message" name="message" onChange={this.onChange} value={this.state.message} />
                <br />
                <button onClick={this.messageSendButton}>Send Message</button>
            </div>
        );
    }
}
 
export default Contact;