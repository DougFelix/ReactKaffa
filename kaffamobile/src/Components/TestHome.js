import React, { Component } from 'react';

import Navbar from './Navbar';
// Import each exercise solution
//import TodoList from './TodoList/TodoList';
//import TwoRectangles from './TwoRectanglesIntersect/TwoRectangles';
import WorldClock from './RestClientWorldClock/WorldClock';
//import CNPJ from './ValidateCNPJ/CNPJ';

// CSS
import './TestHome.css';

class TestHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='TestHome'>
                <Navbar />
                <div className='TestHome-Page'>           
                    <WorldClock />
                </div>
            </div>
        );
    }
}
 
export default TestHome;