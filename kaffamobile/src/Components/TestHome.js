import React, { Component } from 'react';

import Navbar from './Navbar';
// Import each exercise solution
import TodoList from './TodoList/TodoList';
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
                    <TodoList />
                </div>
            </div>
        );
    }
}
 
export default TestHome;