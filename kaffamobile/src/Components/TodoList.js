import React, { Component } from 'react';

// components
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() { 
        return (
            <div className='TodoList'>
                <Todo />
            </div>
        );
    }
}
 
export default TodoList;