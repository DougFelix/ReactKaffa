import React, { Component } from 'react';

//CSS

class NewRectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x1: '',
            y1: '',
            x2: '',
            y2: ''
        }
        this.defaultState = this.state;
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
        this.props.drawRectangle(this.state);
        this.setState(this.defaultState);
    }

    render() { 
        return (
            <div className='NewRectForm'>
                <form onSubmit={this.handleSubmit}>
                    <input name='x1' value={this.state.todo} onChange={this.handleChange} required></input>
                    <input name='y1' value={this.state.todo} onChange={this.handleChange} required></input>
                    <input name='x2' value={this.state.todo} onChange={this.handleChange} required></input>
                    <input name='y2' value={this.state.todo} onChange={this.handleChange} required></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
 
export default NewRectForm;