import React, { Component } from 'react';


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

    drawRectangle(x1,y1,x2,y2){
        let rect = [];
        for (var i = x1; i <= x2; i++) {
            for (var j = y1; j <= y2; j++) {
                rect.push(`${i},${j}`);
            }
        }
        let Rectangles = this.state.Rectangles;
        Rectangles.push(rect);
        this.setState({ Rectangles: Rectangles });
    }



    componentDidMount(){
        let {Rectangles} = this.state;
        this.drawRectangle(3,5,11,11);
        this.drawRectangle(7,2,13,7);
        const found = Rectangles[0].some(r=> Rectangles[1].includes(r))
        console.log(found);
    }

    render() { 
        return (
            <div>
                
                Two Rectangles
            </div>  
        );
    }
}
 
export default TwoRectangles;