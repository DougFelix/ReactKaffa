import React, { Component } from 'react';

//CSS
import './UXPrototype.css';
import UXImage from './UXPrototype.png';

class UXPrototype extends Component {

    render() { 
        return (
            <div className='UXPrototype'>
                <div className='UXPrototype-Title'>UX Prototype</div>
                <div className='UXPrototype-awnsers'>
                    <p>Design and prototype a screen for creating new projects. Each project needs to have the following informations, provided by the user:</p>
                    <ul>
                        <li>Project name (text)</li>
                        <li>Project deadline (date)</li>
                        <li>Project location. The user has to point a location on the map</li>
                    </ul>
                </div>
                <img className='UXPrototype-img' src={UXImage} alt='UXPrototype'/>
            </div>
        );
    }
}
 
export default UXPrototype;