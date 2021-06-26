import React, { Component } from 'react';

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

        for(let i = 0; i < table.length; i++) {
            let row = [];
            for (let j = 0; j < table[0].length; j++) {
                let coord = `${i}-${j}`;
                let alpha = (
                    table[i][j] === 0 
                    ? ( 0.05 )
                    : ( table[i][j]*0.3 > 1
                        ? 1 
                        : table[i][j]*0.3
                    )
                );
                let style = {
                    color: `rgba(0, 0, 0,${alpha})`
                };
                row.push(<td key={coord}><i style={style} className="fas fa-square"></i></td>)
            }
            map.push(<tr key={i}>{row}</tr>);
        }
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