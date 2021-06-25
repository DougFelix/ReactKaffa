import React, { Component } from 'react';

class AddTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        //TODO
    }

    render() { 
        return (
            <div className='AddTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input name='todo' value={this.state.todo} onChange={this.handleChange}></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
 
export default AddTodoForm;