import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './WorldClock.css';

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className='WorldClock'>
                CLOCK
            </div>
        );
    }
}
 
export default WorldClock;