import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './RESTServer.css';

class RESTServer extends Component {
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
            let response = await (await axios.get('http://127.0.0.1:8000/currentDateTime'));
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
            <div className='RESTServer'>
            <div className='RESTServer-Title'>REST Server</div>
            {this.state.utcDate === ''
            ? <div className='RESTServer-info'>
                <p>
                    This component uses the REST Server created by me using Django - Python.
                </p>
                <p>
                    CORS_ALLOWED_ORIGINS = [
                        "http://localhost:3000",
                        "http://127.0.0.1:8000"
                    ]
                </p>
            </div>
            :
                <div>
                    <div className='RESTServer-UTC'>
                        <i className="far fa-clock"></i> UTC: 
                        <div className="RESTServer-Date">{this.state.utcDate}</div>
                        <div className="RESTServer-Time">{this.state.utcTime}</div>
                    </div>
                    <div className='RESTServer-Local'>
                        <i className="fas fa-clock"></i> LOCAL: 
                        <div className="RESTServer-Date">{this.state.localDate}</div>
                        <div className="RESTServer-Time">{this.state.localTime}</div>
                    </div>
                </div>
            }
                <button onClick={this.getTime}>GET DATE / TIME</button>
            </div>
        );
    }
}
 
export default RESTServer;