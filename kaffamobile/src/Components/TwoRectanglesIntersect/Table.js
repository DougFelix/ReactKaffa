import React, { Component } from 'react';

// CSS
import './Styles/Table.css';


class Table extends Component {

    listMaker() {
        let listRect = [];
        let {Rectangles} = this.props;
        // ADD EVERY RECTANGLE TO THE LIST
        for (var rect in Rectangles) {
            listRect.push(
                <li className='Rectangles-List-Item' key={rect}>
                    {`${rect}: [${Rectangles[rect]['x1']}, ${Rectangles[rect]['y1']}] [${Rectangles[rect]['x2']}, ${Rectangles[rect]['y2']}]`}
                </li>
            );
        }
        return listRect;
    }
    
    gridMaker() {
        let map = []
        let {table} = this.props;
        for(let i = table.length-1; i >= 0; i--) {
            // CREATING ROWS (Y)
            let row = [];
            // ADDING 'Y' LABEL
            row.push(<th key={`${i}y`}>{i}</th>);
            for (let j = 0; j < table[0].length; j++) {
                //CREATING COLS (X)
                let coord = `${j}-${i}`;
                // DEFINING ALPHA VALUE
                let alpha = (
                    table[j][i] === 0 
                    ? ( 0.05 )
                    : ( table[j][i]*0.3 )
                );
                // CSS DEFINING RECTANGLE STYLE
                let style = {
                    color: `rgba(0, 0, 0,${alpha})`
                };
                // ADDING X TO ROW
                row.push(<td key={coord}><i style={style} className="fas fa-square"></i></td>)
            }
            // ADDING ROW TO TABLE
            map.push(<tr key={`${i}row`}>{row}</tr>);
        }

        // ADDING 'X' LABEL
        let footer =[];
        footer.push(<th key={`#`} style={{fontSize: 10}}>Y / X</th>);
        for (let j = 0; j < table[0].length; j++) {
            footer.push(<th key={`${j}x`}>{j}</th>);
        }
        map.push(
            <tr key='footer'>
                {footer}
            </tr>
        )

        return map;
    }

    render() {
        let {Rectangles} = this.props; 
        // CREATING GRID
        let map = this.gridMaker();
        // CREATING LIST WITH ALL RECTANGLES COORDINATES
        let listRect = this.listMaker();

        return (
            <div className='Table'>
                <table className='Rectangles-Draw'>
                    <tbody>
                        {map}
                    </tbody>
                </table>
                {Object.keys(Rectangles).length > 0 &&
                    <ul className='Rectangles-List'>
                        {listRect}
                    </ul>
                }
            </div>
        );
    }
}
 
export default Table;