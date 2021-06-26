import React, { Component } from 'react';

//CSS

class CompareRectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rect1: this.props.Rectangles[0],
            rect2: this.props.Rectangles[1]
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
        var intersectPoints = this.getIntersection(this.state.rect1, this.state.rect2);
        let newIntersect = intersectPoints.map(point => point.split(',').map( x => parseInt(x)));
        console.log(newIntersect.length > 0 ? true : false);
        console.log(newIntersect);
    }

    getIntersection(a1,a2){
        return  a1.filter((n) => { 
            return a2.indexOf(n) !== -1;
        });
    }

    render() {
        let options = [];
        for(let rect in this.props.Rectangles) { 
            options.push(<option key={rect.key} value={rect}>{rect.key}</option>)
        }

        return (
            <div className='CompareRectForm'>
                <form onSubmit={this.handleSubmit}>
                    <select name='rect1' value='' onChange={this.handleChange}>
                        {options}
                    </select>
                    <select name='rect2' value={this.state.rect1} onChange={this.handleChange}>
                        {options}
                    </select>
                    <button>Add</button>
                </form>
                <p>TEXT</p>
            </div>
        );
    }
}
 
export default CompareRectForm;