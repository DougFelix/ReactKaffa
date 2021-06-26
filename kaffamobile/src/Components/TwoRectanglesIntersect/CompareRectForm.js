import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

//CSS

class CompareRectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rect1: Object.keys(this.props.Rectangles)[0],
            rect2: Object.keys(this.props.Rectangles)[1],
            intersect: '',
            area: ''
        }
        this.defaultState = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            intersect: '',
            area: ''
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let {Rectangles} = this.props;
        var intersectPoints = this.getIntersection(Rectangles[this.state.rect1]['points'], Rectangles[this.state.rect2]['points']);
        let newIntersect = intersectPoints.map(point => point.split(',').map( x => parseInt(x)));
        this.setState({
            intersect: newIntersect.length > 0 ? 'true' : 'false',
            area: newIntersect.length
        })
    }

    getIntersection(a1,a2){
        return  a1.filter((n) => { 
            return a2.indexOf(n) !== -1;
        });
    }

    render() {
        let {area, intersect} = this.state;
        let options = [];
        for(let rect in this.props.Rectangles) { 
            options.push(<option key={uuidv4()} value={rect}>{rect}</option>)
        }

        return (
            <div className='CompareRectForm'>
                <form onSubmit={this.handleSubmit}>
                    <select name='rect1' value={this.state.rect1} onChange={this.handleChange}>
                        {options}
                    </select>
                    <select name='rect2' value={this.state.rect2} onChange={this.handleChange}>
                        {options}
                    </select>
                    <button>Compute!</button>
                </form>
                {area !== '' &&
                    <div className='CompareRectForm-Info'> 
                        <p>Intersect: {intersect}</p>
                        <p>Area of intersection: {area}</p>
                    </div>
                }
            </div>
        );
    }
}
 
export default CompareRectForm;