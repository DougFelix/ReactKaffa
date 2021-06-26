import React, { Component } from 'react';
import { validateCNPJ } from './helpers';

//CSS
import './CNPJ.css';

class CNPJ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            isValid: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // FORM FUNCTIONS
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            isValid: ''
        });
    }

    handleSubmit(e){
        e.preventDefault();
        //TODO
        let isValid = validateCNPJ(this.state.cnpj);
        this.setState({isValid: isValid});
    }

    render() { 
        return (
            <div className='CNPJ'>
                <form className='CNPJ-Form' onSubmit={this.handleSubmit}>
                    <div className='CNPJ-title'>CNPJ</div>
                    <input name='cnpj' value={this.state.cnpj} type='text' onChange={this.handleChange} required></input>
                    <button>Validate CNPJ</button>
                </form>
                {this.state.isValid !== '' 
                ? this.state.isValid === true
                    ? 'VALID CNPJ'
                    : 'INVALID CNPJ'
                : ''
                }
            </div>
        );
    }
}
 
export default CNPJ;