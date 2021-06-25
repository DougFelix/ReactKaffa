import React, { Component } from 'react';

class AddTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        //TODO
    }

    render() { 
        return (
            <div className='AddTodoForm'>
                <span>ADD BUTTON</span>
            </div>
        );
    }
}
 
export default AddTodoForm;