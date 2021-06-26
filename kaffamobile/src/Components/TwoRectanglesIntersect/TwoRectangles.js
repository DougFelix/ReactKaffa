import React, { Component } from 'react';

// Import components
import NewRectForm from './NewRectForm';
import CompareRectForm from './CompareRectForm';


class TwoRectangles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Rectangles: {}
        }
        this.drawRectangle = this.drawRectangle.bind(this);
    }


    drawRectangle(rectPoints){
        let rect = [];
        for (var i = rectPoints.x1; i <= rectPoints.x2; i++) {
            for (var j = rectPoints.y1; j <= rectPoints.y2; j++) {
                // getting each point inside of rectangle
                rect.push(`${i},${j}`);
            }
        }
        let Rectangles = this.state.Rectangles;
        let name = 'rect'+ Object.keys(Rectangles).length
        Rectangles[name] = {
            points: rect,
            ...rectPoints
        }
        this.setState({ Rectangles: Rectangles });
    }

    render() {
        let {Rectangles} = this.state;
        let listRect = [];
        for (var rect in Rectangles) {
            listRect.push(
                `${rect}: [${Rectangles[rect]['x1']}, ${Rectangles[rect]['y1']}] [${Rectangles[rect]['x2']}, ${Rectangles[rect]['y2']}]`
            );
        }
        

        return (
            <div>
                <NewRectForm drawRectangle={this.drawRectangle} />
                {listRect}
                {Object.keys(Rectangles).length >= 2 &&
                    <CompareRectForm Rectangles={this.state.Rectangles} />
                }
            </div>  
        );
    }
}
 
export default TwoRectangles;





// CODE IDEAS

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


    // this.drawRectangle(3,5,11,11);
    // this.drawRectangle(7,2,13,7);
    // this.drawRectangle(11,11,15,13);
    // Compare both rectangle to check if they intersect
    // var intersectPoints = this.getIntersection(Rectangles[1], Rectangles[2]);
    // let newIntersect = intersectPoints.map(point => point.split(',').map( x => parseInt(x)));
    // console.log(newIntersect.length > 0 ? true : false);
    // console.log(newIntersect);