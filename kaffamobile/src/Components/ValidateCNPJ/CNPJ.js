import React, { Component } from 'react';

//CSS
import './CNPJ.css';

class CNPJ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // FORM FUNCTIONS
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        //TODO
    }

    render() { 
        return (
            <div className='CNPJ'>
                <form className='CNPJ-Form' onSubmit={this.handleSubmit}>
                    <div className='CNPJ-title'>CNPJ</div>
                    <input name='cnpj' value={this.state.cnpj} onChange={this.handleChange} required></input>
                    <button>Validate CNPJ</button>
                </form>
            </div>
        );
    }
}
 
export default CNPJ;