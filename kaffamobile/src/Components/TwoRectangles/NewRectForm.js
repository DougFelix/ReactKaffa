import React, { Component } from 'react';

//CSS
import './Styles/NewRectForm.css';

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

    // FORM FUNCTIONS
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let newRect = {...this.state};
        this.props.addRectangle(newRect);
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
                <form className='NewRectForm-Form' onSubmit={this.handleSubmit}>
                    <div className='NewRectForm-title'>Coordinate 1:</div>
                    <div className='NewRectForm-xy'>
                        <div className='NewRectForm-p'>
                            <label htmlFor="x1">X : </label>
                            <input id='x1' name='x1' value={this.state.x1} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        </div>
                        <div className='NewRectForm-p'>
                            <label htmlFor="y1">Y : </label>
                            <input id='y1' name='y1' value={this.state.y1} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        </div>
                    </div>
                    <div className='NewRectForm-title'>Coordinate 2:</div>
                    <div className='NewRectForm-xy'>
                        <div className='NewRectForm-p'>
                            <label htmlFor="x2">X : </label>
                            <input id='x2' name='x2' value={this.state.x2} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        </div>
                        <div className='NewRectForm-p'>
                            <label htmlFor="y2">Y : </label>
                            <input id='y2' name='y2' value={this.state.y2} onChange={this.handleChange} type='number' min={0} max={15} required></input>
                        </div>
                    </div>
                    <button>Add Rectangle</button>
                </form>
            </div>
        );
    }
}
 
export default NewRectForm;