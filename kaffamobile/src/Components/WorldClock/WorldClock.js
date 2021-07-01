import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './WorldClock.css';

// API URLs
const worldclockapi = 'http://worldclockapi.com/api/json/utc/now';
const localapi = 'http://127.0.0.1:8000/currentDateTime';


class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localDate: '',
            localTime: '',
            utcDate: '',
            utcTime: '',
            useLocalAPI: false
        }

        // DEFAULT STATE TO RESET TO
        this.defaultState = {
            localDate: '',
            localTime: '',
            utcDate: '',
            utcTime: ''
        }
        
        this.getTime = this.getTime.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
    }

    async getTime() {
        try {
            // FETCH DATA FROM API
            let response = await axios.get(
                this.state.useLocalAPI
                ? localapi
                : worldclockapi
            );
            // EXTRACT DATETIME-UTC
            let utcDateTime = response.data.currentDateTime;

            this.setState({
                // LOCAL DATE TIME
                localDate: new Date(utcDateTime).toLocaleDateString(),
                localTime: new Date(utcDateTime).toLocaleTimeString('pt-BR',{hour: "numeric", minute: "numeric"}),
                // UTC DATE TIME
                utcDate: utcDateTime.split('T')[0].split("-").reverse().join("/"),
                utcTime: utcDateTime.split('T')[1]
            })
        }
        catch (e) {
            alert(e + ". Make sure to start REST Server properly.");
        }
    }

    // HANDLE WHICH SERVER WAS SELECTED AND SET IN STATE
    handleSwitch(){
        this.setState(st => ({
            useLocalAPI: !st.useLocalAPI,
            ...this.defaultState
        }));
    }

    render() { 
        return (
            <div className='WorldClock'>
            <div className='WorldClock-Title'>World Clock</div>
            <div className='WorldClock-Switch'>
                <select value={this.state.rect1} onChange={this.handleSwitch}>
                    <option value={false}>Exercise 5: Server URL</option>
                    <option value={true}>Exercise 6: REST Server</option>
                </select>
                {this.state.useLocalAPI
                ?   <span className='switch-Text'>
                        http://127.0.0.1:8000/currentDateTime
                        <div><strong>Import:</strong> Start Local REST Server before testing.</div>
                    </span>
                :   <span className='switch-Text'>
                        http://worldclockapi.com/api/json/utc/now
                    </span>
                }
            </div>
            <hr/>
            <button onClick={this.getTime}>GET DATE / TIME</button>
            {this.state.utcDate === '' ? '' :
                <div className='WorldClock-data'>
                    <div className='WorldClock-UTC'>
                        <i className="far fa-clock"></i> UTC: 
                        <div className="WorldClock-Date">{this.state.utcDate}</div>
                        <div className="WorldClock-Time">{this.state.utcTime}</div>
                    </div>
                    <div className='WorldClock-Local'>
                        <i className="fas fa-clock"></i> LOCAL: 
                        <div className="WorldClock-Date">{this.state.localDate}</div>
                        <div className="WorldClock-Time">{this.state.localTime}</div>
                    </div>
                </div>
            }                
            </div>
        );
    }
}
 
export default WorldClock;