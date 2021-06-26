import React, { Component } from 'react';

// Import components
import NewRectForm from './NewRectForm';
import CompareRectForm from './CompareRectForm';
import Table from './Table';

// CSS
import './Styles/TwoRectangles.css';

class TwoRectangles extends Component {
    static defaultProps = {
        maxSize: 16
    }
    
    constructor(props) {
        super(props);
        this.state = {
            Rectangles: {},
            table: this.mount()
        }
        this.addRectangle = this.addRectangle.bind(this);
    }

    addRectangle(rectPoints){
        let rect = [];
        let x = [rectPoints.x1, rectPoints.x2].sort(function(a, b) {
            return a - b;
        });;
        let y = [rectPoints.y1, rectPoints.y2].sort(function(a, b) {
            return a - b;
        });;

        for(let i = parseInt(x[0]); i <= parseInt(x[1]); i++) {
            for(let j = parseInt(y[0]); j <= parseInt(y[1]); j++) {
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
        
        // DRAW NEW RECTANGLE
        let table = this.drawRect(rect);

        // Updating State
        this.setState({
            Rectangles: update,
            table: table
        });
    }

    //MAP FUNCTIONS
    mount(){
        var matrix = [];
        for (var i = 0; i < this.props.maxSize; i++) {
            matrix[i] = new Array(this.props.maxSize);
            for (var j = 0; j < this.props.maxSize; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }

    drawRect(rectPoints){
        let table = [...this.state.table];

        // CODE TO DRAW ENTIRE RECTANGLE AREA
        let newRectangle = rectPoints.map(point => point.split(',').map( x => parseInt(x)));
        for (var point of newRectangle) {
            table[point[0]][point[1]] += 1;
        }

        // CODE TO ONLY DRAW PERIMETER
        // let x = [rectPoints.x1, rectPoints.x2].sort(function(a, b) {
        //     return a - b;
        // });;
        // let y = [rectPoints.y1, rectPoints.y2].sort(function(a, b) {
        //     return a - b;
        // });;
        
        // for(let i = parseInt(x[0]); i <= parseInt(x[1]); i++) {
        //     table[i][rectPoints.y1] += 1;
        //     table[i][rectPoints.y2] += 1;
        // }
        // for(let j = parseInt(y[0]); j <= parseInt(y[1]); j++) {
        //     table[rectPoints.x1][j] += 1;
        //     table[rectPoints.x2][j] += 1;
        // }

        // table[rectPoints.x1][rectPoints.y1] -= 1;
        // table[rectPoints.x1][rectPoints.y2] -= 1;
        // table[rectPoints.x2][rectPoints.y1] -= 1;
        // table[rectPoints.x2][rectPoints.y2] -= 1;

        return table;
    }


    render() {
        let {Rectangles, table} = this.state;
        return (
            <div className='TwoRectangles'>

                {/* FORM TO ADD NEW RECTANGLE */}
                <NewRectForm Rectangles={Rectangles} addRectangle={this.addRectangle} />
                
                {/* FORM TO ADD NEW RECTANGLE */}
                <Table Rectangles={Rectangles} table={table}/>
                
                {/* FORM TO ANALYZE TO RECTANGLE */}
                {Object.keys(Rectangles).length >= 2 &&
                    <CompareRectForm Rectangles={Rectangles} />
                }
            </div>  
        );
    }
}
 
export default TwoRectangles;