import React, { Component } from 'react';

//CSS
import './ERDiagram.css';
import ERImage from './ERDiagram.png';

class ERDiagram extends Component {

    render() { 
        return (
            <div className='ERDiagram'>
                <div className='ERDiagram-Title'>Entity Relationship Diagram</div>
                <img className='ERDiagram-img' src={ERImage} alt='ERDiagram'/>
                <div className='ERDiagram-awnsers'>
                    <h4>SQL: list ORDERS with number of items</h4>
                    SELECT orders.id, SUM(ordered_products.quantity) FROM 
                    orders LEFT JOIN ordered_producs 
                    ON orders.id = ordered_producs.order_id
                    GROUP BY orders.id;
                    <hr/>
                    <h4>Which indexes should be created in this model?</h4>
                    Primary keys (PK), Foreign Keys (FK), CPF and Products name.
                </div>
            </div>
        );
    }
}
 
export default ERDiagram;