import React, { Component } from 'react';

// Import components
import NewRectForm from './NewRectForm';
import CompareRectForm from './CompareRectForm';
import MapRectangles from './MapRectangles';


class TwoRectangles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Rectangles: {}
        }
        this.addRectangle = this.addRectangle.bind(this);
    }

    addRectangle(rectPoints){
        let rect = [];
        for (var i = rectPoints.x1; i <= rectPoints.x2; i++) {
            for (var j = rectPoints.y1; j <= rectPoints.y2; j++) {
                // getting each point inside of rectangle
                rect.push(`${i},${j}`);
            }
        }
        let {Rectangles} = this.state;
        // Copying State
        let update = {...Rectangles};
        // Generate rectangle name
        let name = 'rect'+ Object.keys(Rectangles).length;
        // Adding new rectangle
        update[name] = {
            points: rect,
            ...rectPoints
        };
        // Updating State
        this.setState({Rectangles: update});
    }

    render() {
        let {Rectangles} = this.state;
        return (
            <div>
                <NewRectForm Rectangles={this.state.Rectangles} addRectangle={this.addRectangle} />
                {Object.keys(Rectangles).length >= 2 &&
                    <CompareRectForm Rectangles={this.state.Rectangles} />
                }
            </div>  
        );
    }
}
 
export default TwoRectangles;