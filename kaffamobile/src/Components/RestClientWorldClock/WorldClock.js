import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './WorldClock.css';

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localDate: '',
            localTime: '',
            utcDate: '',
            utcTime: ''
        }
        this.getTime = this.getTime.bind(this);
    }

    async getTime() {
        try {
            let response = await axios.get('http://worldclockapi.com/api/json/utc/now');
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
            alert(e);
        }
    }

    render() { 
        return (
            <div className='WorldClock'>
            <div className='WorldClock-Title'>World Clock</div>
            {this.state.utcDate === '' ? '' :
                <div>
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
                <button onClick={this.getTime}>GET DATE / TIME</button>
            </div>
        );
    }
}
 
export default WorldClock;