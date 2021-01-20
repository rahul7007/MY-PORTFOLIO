import React, { Component } from 'react';
import "./Calender.css";

class Calender extends Component {
    constructor(){
        super()
        this.state={
            time: new Date(),
            quote:'',
            author:''
        }
    }

    async componentWillMount(){
        setInterval(()=>
            this.currentTime(), 1000        
        )
        const url = process.env.REACT_APP_QUOTE
        alert(url)
        const response = await fetch(url)
        const data = await response.json()
        console.log("quote is",data)
        console.log(typeof(data))
        var obj = data[Math.floor(Math.random() * data.length)]
        console.log(obj.quote)
        const quote = obj.quote
        const author = obj.author
        this.setState({
            quote: quote,
            author: author
        })
    }

    currentTime(){
        this.setState({
            time: new Date()
        })
    }  

    render() { 
        return (
            <React.Fragment>
                <div className="main">
                    <div className="month">
                    {this.state.time.toLocaleDateString('en-US', {month: "short"}) }
                    </div>
                    <div className="Date">
                        {this.state.time.toLocaleDateString('en-US', {day: "numeric"}) }
                        <hr className="date-hr" />
                    </div>
                    <div className="day">
                        {this.state.time.toLocaleDateString('en-US', {weekday: "short"}) }
                    </div>
                </div>
                
                <div className="quote">
                <i>{this.state.quote}</i>
                <br /><br />
                <i>-{this.state.author}</i>
                <br /><br />
                </div>


            </React.Fragment>
         );
    }
}
 
export default Calender;