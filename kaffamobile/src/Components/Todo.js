import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        //TODO
        console.log('deleted');
    }


    render() { 
        return (
            <div className='Todo'>
                <span>TODO</span>
                <div className='Todo-Icon'>
                    <span onClick={this.handleDelete}><i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        );
    }
}
 
export default Todo;