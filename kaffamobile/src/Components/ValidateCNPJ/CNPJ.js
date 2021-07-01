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

    // HANDLE INPUT CHANGE IN FORM
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            isValid: ''
        });
    }

    // CALL FUNCTION validateCNPJ IN helpers.js TO CHECK IF ENTRY IS VALID
    handleSubmit(e){ 
        e.preventDefault();
        let isValid = validateCNPJ(this.state.cnpj);
        // SET STATE EQUAL TO VALIDATION RESULT
        this.setState({isValid: isValid});
    }

    render() {
        // DEFINE RESULT STYLE
        let style = {
            color: this.state.isValid ? 'green' : 'red'
        }

        return (
            <div className='CNPJ'>
                <form className='CNPJ-Form' onSubmit={this.handleSubmit}>
                    <div className='CNPJ-Title'>CNPJ</div>
                    <div className='CNPJ-info'>Validate CNPJ format and check digits:</div>
                    <input name='cnpj' value={this.state.cnpj} type='text' onChange={this.handleChange} required></input>
                    <button>Check</button>
                </form>
                {this.state.isValid !== '' 
                ? <div className='CNPJ-validation' style={style}> {this.state.isValid === true
                    ? 'VALID CNPJ'
                    : 'INVALID CNPJ'
                    }
                    </div>
                : ''
                }
            </div>
        );
    }
}
 
export default CNPJ;