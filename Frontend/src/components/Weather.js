import React, { Component } from 'react';
import './weather.css'
//import weatherIcon from './img/few_clouds.gif';
import loc from './img/location.png';
var test = ''
class Weather extends Component {
    constructor(){
        super()
        this.state={
            weather:'',
            status:'',
            country:'',
            city:'',
            icon:'',
            time: new Date(),
            //test:''
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

    async componentDidMount(){
        const url = 'http://api.openweathermap.org/data/2.5/'
        const key = 'f196e1c1651f97563f531c7f465d8252'
        // const response = await fetch(url)
        const response = await fetch(`${url}weather?q=Guwahati&units=metric&APPID=${key}`)
        const data = await response.json()
        const iconName = data.weather[0].icon
        const iconApi = await fetch('http://openweathermap.org/img/w/' + iconName + '.png')
        test = './img/' + data.weather[0].main + '.gif'
        console.log(iconApi.url)
        this.setState({
            weather : data.main.temp,
            status : data.weather[0].main,
            icon : iconApi.url,
            country : data.sys.country,
            city : data.name,
           
        })
        
    }

    render() {
        return (
            <div style={{fontFamily: 'Amita'}}>
                <div style={{fontSize:'50px', color:'white'}}>
                    <img 
                        //src={weatherIcon}
                        src={require('./img/clear_sky.gif')}
                        style={{width:'100%', height:'100%'}}
                    />
                </div>

                <div style={{color:'white', fontSize:'25px', marginTop:'-20px'}} >
                    {Math.round(this.state.weather)}°c
                </div>
                <div style={{color:'white', fontSize:'25px'}} >
                    {this.state.status}
                </div> 
                <div style={{color:'white', fontSize:'25px'}}>
                    {/* <i class="material-icons">place</i> */}
                    <img style={{width:'40px', height:'40px', marginBottom:'10px'}} src={loc} />
                    {this.state.city}, {this.state.country}                    
                </div>
                <br /><br />

                <div className="time" style={{color:'white', fontSize:'50px', fontFamily:'Monoton'}}>
                    {this.state.time.toLocaleTimeString('it-IT')}
                </div>
            </div>
        );
    }
}
 
export default Weather;