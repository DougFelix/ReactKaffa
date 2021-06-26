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
            y2: 0,
            table: this.mount()
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
        let {x1, y1, x2, y2} = this.state;
        let newRect = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        }
        this.props.addRectangle(newRect);
        // DRAW NEW RECTANGLE
        let table = this.fillRectangles()
        this.setState({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            table: table
        });
    }

    //MAP FUNCTIONS
    mount(){
        var matrix = [];
        for (var i = 0; i < 16; i++) {
            matrix[i] = new Array(16);
            for (var j = 0; j < 16; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }

    fillRectangles(){
        let table = this.mount();
        let {Rectangles} = this.props;
        // for (var rect in Rectangles) {
        //     console.log(Object.values(Rectangles[rect]));
        // }
        for (var rect in Rectangles) {
            for (var i = Rectangles[rect]['x1']; i <= Rectangles[rect]['x2']; i++) {
                table[i][Rectangles[rect]['y1']] += 1;
                table[i][Rectangles[rect]['y2']] += 1;
            }
            for (var j = Rectangles[rect]['y1']; j <= Rectangles[rect]['y2']; j++) {
                table[Rectangles[rect]['x1']][j] += 1;
                table[Rectangles[rect]['x2']][j] += 1;
            }
            table[Rectangles[rect]['x1']][Rectangles[rect]['y1']] -=1;
            table[Rectangles[rect]['x1']][Rectangles[rect]['y2']] -=1;
            table[Rectangles[rect]['x2']][Rectangles[rect]['y1']] -=1;
            table[Rectangles[rect]['x2']][Rectangles[rect]['y2']] -=1;
        }
        return table;
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