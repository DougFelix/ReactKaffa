import React, { Component } from 'react';

// CSS
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className='Navbar'>
                <div className='Navbar-Logo'>
                    <a href='http://localhost:3000/'> NAVBAR </a>
                </div>
                <ul className='Navbar-Tabs'>
                    <a href='http://localhost:3000/'>Exercise 1</a>
                    <a href='http://localhost:3000/'>Exercise 2</a>
                    <a href='http://localhost:3000/'>Exercise 3</a>
                    <a href='http://localhost:3000/'>Exercise 4</a>
                    <a href='http://localhost:3000/'>Exercise 5</a>
                    <a href='http://localhost:3000/'>Exercise 6</a>
                    <a href='http://localhost:3000/'>Exercise 7</a>
                    <a href='http://localhost:3000/'>Exercise 8</a>
                </ul>
            </header>
        );
    }
}
 
export default Navbar;