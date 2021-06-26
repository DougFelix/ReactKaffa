import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './WorldClock.css';

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.getTime = this.getTime.bind(this);
    }

    async getTime() {
        try {
            let data = await axios.get('http://worldclockapi.com/api/json/utc/now');
            this.setState(data.data);
        }
        catch (e) {
            alert(e);
        }
    }

    render() { 
        return (
            <div className='WorldClock'>
                <div className="WorldClock-Display">
                    {this.state.currentDateTime}
                </div>
                <button onClick={this.getTime}>CLICK</button>
            </div>
        );
    }
}
 
export default WorldClock;