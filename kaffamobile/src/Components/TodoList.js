import React, { Component } from 'react';

// components
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.mount()
        }
    }

    // Create new list of ToDos or load existing one
    mount(){
        let list = JSON.parse(localStorage.getItem('@mytodoslist') || '[]');
        return list;
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