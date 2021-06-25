import React, { Component } from 'react';

import NewRectForm from './NewRectForm';
// Considering two rectangles in a discrete grid (like pixels in a display), each defined by two points, return
// true if they intersect, false otherwise.
// Note: the points are included in the rectangle and have a dimension of 1 unit; the rectangle (0, 0; 1, 1) have an
// area of 4 units.

class TwoRectangles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Rectangles: []
        }
        this.drawRectangle = this.drawRectangle.bind(this);
    }

    // mount(){
    //     var matrix = [];
    //     for (var i = 0; i < 16; i++) {
    //         matrix[i] = new Array(16);
    //         for (var j = 0; j < 16; j++) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    //     return matrix;
    // }

    drawRectangle(rectPoints){
        
        let rect = [];
        for (var i = rectPoints.x1; i <= rectPoints.x2; i++) {
            for (var j = rectPoints.y1; j <= rectPoints.y2; j++) {
                rect.push(`${i},${j}`);
            }
        }
        let Rectangles = this.state.Rectangles;
        Rectangles.push(rect);
        this.setState({ Rectangles: Rectangles });
    }

    getIntersection(a1,a2){
        return  a1.filter((n) => { 
            return a2.indexOf(n) !== -1;
        });
    }

    componentDidMount(){
        let {Rectangles} = this.state;
        this.drawRectangle(3,5,11,11);
        this.drawRectangle(7,2,13,7);
        this.drawRectangle(11,11,15,13);
        // Compare both rectangle to check if they intersect
        var intersectPoints = this.getIntersection(Rectangles[1], Rectangles[2]);
        let newIntersect = intersectPoints.map(point => point.split(',').map( x => parseInt(x)));
        console.log(newIntersect.length > 0 ? true : false);
        console.log(newIntersect);
    }

    render() { 
        return (
            <div>
                <NewRectForm drawRectangle={this.drawRectangle} />
                Two Rectangles
            </div>  
        );
    }
}
 
export default TwoRectangles;