import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        //TODO
        console.log('deleted'+id);
    }


    render() { 
        const {data} = this.props;
        return (
            <div className='Todo'>
                <span>{data.todo}</span>
                <div className='Todo-Icon'>
                    <span onClick={() => this.handleDelete(data.id)}><i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        );
    }
}
 
export default Todo;