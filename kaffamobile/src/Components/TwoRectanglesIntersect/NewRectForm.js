import React, { Component } from 'react';

//CSS
import './NewRectForm.css';

class NewRectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0
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
        let newRect = this.state;
        this.props.drawRectangle(newRect);
        this.setState({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0
        });
    }

    render() { 
        return (
            <div className='NewRectForm'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>Coordinate 1:</span>
                        <label htmlFor="x1">x</label>
                        <input id='x1' name='x1' value={this.state.x1} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        <label htmlFor="y1">y</label>
                        <input id='y1' name='y1' value={this.state.y1} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                    </div>
                    <div>
                        <span>Coordinate 2:</span>
                        <label htmlFor="x2">x</label>
                        <input id='x2' name='x2' value={this.state.x2} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        <label htmlFor="y2">y</label>
                        <input id='y2' name='y2' value={this.state.y2} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
 
export default NewRectForm;