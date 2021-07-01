import React, { Component } from 'react';

// CSS
import './Styles/Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    // Calls delete function from TodoList.js
    handleDelete(id) {
        this.props.deleteTodo(id);
    }


    render() { 
        const {data} = this.props;
        return (
            <div className='Todo'>
                <div className='Todo-text'>{data.todo}</div>
                <div className='Todo-Icon'>
                    <span onClick={() => this.handleDelete(data.id)}><i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        );
    }
}
 
export default Todo;