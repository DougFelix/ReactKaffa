import React, { Component } from 'react';

class MapRectangles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.mount()
        }
    }

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

    fillRectangles(matrix){
        let {Rectangles} = this.props;
        // for (var rect in Rectangles) {
        //     console.log(Object.values(Rectangles[rect]));
        // }
        for (var rect in Rectangles) {
            for (var i = Rectangles[rect]['x1']; i <= Rectangles[rect]['x2']; i++) {
                matrix[i][Rectangles[rect]['y1']] += 1;
                matrix[i][Rectangles[rect]['y2']] += 1;
            }
            for (var j = Rectangles[rect]['y1']; j <= Rectangles[rect]['y2']; j++) {
                matrix[Rectangles[rect]['x1']][j] += 1;
                matrix[Rectangles[rect]['x2']][j] += 1;
            }
            matrix[Rectangles[rect]['x1']][Rectangles[rect]['y1']] -=1;
            matrix[Rectangles[rect]['x1']][Rectangles[rect]['y2']] -=1;
            matrix[Rectangles[rect]['x2']][Rectangles[rect]['y1']] -=1;
            matrix[Rectangles[rect]['x2']][Rectangles[rect]['y2']] -=1;
        }
        this.setState({table: matrix});
        return matrix;
    }

    render() {
        return (
            <div>
                MAP
            </div>
        );
    }
}
 
export default MapRectangles;