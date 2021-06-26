import React, { Component } from 'react';

// CSS
import './Styles/Table.css';


class Table extends Component {

    listMaker() {
        let listRect = [];
        let {Rectangles} = this.props;

        for (var rect in Rectangles) {
            listRect.push(
                <li key={rect}>{`${rect}: [${Rectangles[rect]['x1']}, ${Rectangles[rect]['y1']}] [${Rectangles[rect]['x2']}, ${Rectangles[rect]['y2']}]`}</li>
            );
        }
        return listRect;
    }
    
    gridMaker() {
        let map = []
        let {table} = this.props;
        for(let i = table.length-1; i >= 0; i--) {
            let row = [];
            row.push(<th key={`${i}y`}>{i}</th>);
            for (let j = 0; j < table[0].length; j++) {
                let coord = `${i}-${j}`;
                let alpha = (
                    table[i][j] === 0 
                    ? ( 0.03 )
                    : ( table[i][j]*0.3 )
                );
                // CSS DEFINING RECTANGLE STYLE
                let style = {
                    color: `rgba(0, 0, 0,${alpha})`
                };
                row.push(<td key={coord}><i style={style} className="fas fa-square"></i></td>)
            }
            map.push(<tr key={`${i}row`}>{row}</tr>);
        }

        let footer =[];
        footer.push(<th key={`#`}>#</th>);
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
        let map = this.gridMaker();
        let listRect = this.listMaker();

        return (
            <div className='Table'>
                <table className='Rectangles-Draw'>
                    <tbody>
                        {map}
                    </tbody>
                </table>
                <ul className='Rectangles-List'>
                    {listRect}
                </ul>
            </div>
        );
    }
}
 
export default Table;