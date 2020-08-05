import React, { Component } from 'react';

class Clock extends Component {
    constructor(){
        super()
        this.state={
            time: new Date()
        }
    }
    componentWillMount(){
        setInterval(()=>
            this.currentTime(), 1000        
        )
    }

    currentTime(){
        this.setState({
            time: new Date()
        })
    }  

    render() { 
        return (
            <div class="">
                <div style={{backgroundColor:'', fontSize:''}}>
                    {this.state.time.toLocaleTimeString()} 
                </div>
            </div>
         );
    }
}
 
export default Clock;