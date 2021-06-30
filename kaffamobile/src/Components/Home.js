import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
// Import each exercise solution
import CNPJ from './ValidateCNPJ/CNPJ';
import TwoRectangles from './TwoRectangles/TwoRectangles';
import TodoList from './TodoList/TodoList';
import WorldClock from './WorldClock/WorldClock';
import ERDiagram from './ERDiagram/ERDiagram';
import UXPrototype from './UXPrototype/UXPrototype';

// CSS
import './Home.css';

const Home = () => <div className='Home'> <div className='Home-Title'>HOME PAGE</div></div>;

class TestHome extends Component {

    render() { 
        return (
            <div className='TestHome'>
                <Navbar />
                <div className='TestHome-Page'>
                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route exact path='/1' render={() => <CNPJ />} />
                        <Route exact path='/23' render={() => <TwoRectangles />} />
                        <Route exact path='/4' render={() => <TodoList />} />
                        <Route exact path='/56' render={() => <WorldClock />} />
                        <Route exact path='/7' render={() => <ERDiagram />} />
                        <Route exact path='/8' render={() => <UXPrototype />} />
                    </Switch>         
                </div>
            </div>
        );
    }
}
 
export default TestHome;