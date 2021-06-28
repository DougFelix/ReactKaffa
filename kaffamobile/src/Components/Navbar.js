import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

// CSS
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <nav className="Navbar navbar navbar-expand-lg navbar-light">
                    <NavLink exact className='navbar-brand newA' activeClassName='navActive' to='/'>HOME</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav">
                            <NavLink exact className='newA' activeClassName='navActive' to='/1'>Solution 1</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/23'>Solution 2 | 3</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/4'>Solution 4</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/5'>Solution 5</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/6'>Solution 6</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/7'>Solution 7</NavLink>
                            <NavLink exact className='newA' activeClassName='navActive' to='/8'>Solution 8</NavLink>
                        </ul>
                    </div>
                </nav>
        );
    }
}
 
export default Navbar;