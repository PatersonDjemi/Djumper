import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';


import {FormInput, CheckInput} from '../reusable/inputs'
import Mail from '../../assets/Mail.svg';
import User from '../../assets/User.svg';
import Password from '../../assets/locked.svg'


import { valLength , isEmail, require } from '../reusable/forms';
import { connect } from 'react-redux';
import { signupStart } from '../actions'



class SignupForm extends Component {
    constructor(props) {
        super(props);
    }

    renderInputField({input, 
        meta: {touched, error, active},
        placeholder, type, url} ) {

        const hasError = touched && !active && error !== "undefined";

        return (
            <FormInput className="login__form_input form__icons"
                    inputStyle="login__input"
                    placeholder={placeholder}
                    type={type}
                    url={url}
                    input={input}
                    hasError={hasError}
                    error={error} />
        );
    }

    renderCheckbox({input, text, meta: {touched, error} }) {

        const hasError = touched && error !== 'undefined';

        return ( 
            <CheckInput input={input}
                text={text}
                hasError={hasError}
                error={error} />
        );
    }

    submitSignup({first, last, email, password, agree}) {
        
        const { reset, signupStart } = this.props;

        this.props.loading();
        
        // call the action creator
        signupStart({first, last, email, password, agree});
        
        // clear the fields input
        reset()
    }

    render () {

        const { handleSubmit } = this.props;

        return (
            <div style={{paddingTop: 1.5 + 'rem'}}>

                <Field name="first"
                    component={this.renderInputField}
                    placeholder="First name"
                    type="text"
                    url={User}
                    validate={[reqFirstName, valFirstName]} />

                <Field name="last"
                    component={this.renderInputField}
                    placeholder="Last name"
                    type="text"
                    url={User}
                    validate={[reqLastName, valLastName]} />

                <Field name="email"
                    component={this.renderInputField}
                    placeholder="Email"
                    type="email" 
                    url={Mail}
                    validate={[reqEmail, myEmail]}/>

                <Field name="password"
                    component={this.renderInputField}
                    placeholder="Password"
                    type="password"
                    url={Password}
                    validate={[reqPassword, valPassword]} />

                <Field name="agree"
                       component={this.renderCheckbox} 
                       text="I agree to the Terms and Conditions.Le Lorem 
                       Ipsum est simplement du faux texte employé"
                       validate={reqCheckbox}/>

                <span className="signup__btn sign__btn"
                      onClick={handleSubmit(this.submitSignup.bind(this))}> 
                Sign up 
                </span>

            </div>
        );
    }
}


SignupForm = connect(null, { signupStart })(SignupForm);


/* ---- call the function for validating every input ---- */
    // for the first name
    const reqFirstName = require("First Name");
    const valFirstName = valLength("First Name", 3, 20);
    
        // for the last name
    const reqLastName = require("Last Name");
    const valLastName = valLength("Last Name", 3, 20);
    
        // for the email
    const reqEmail = require("Email");
    const myEmail = isEmail("Email");
    
        // for the password
    const reqPassword = require("Password");
    const valPassword = valLength("Password", 5, 100);
    
        // for the checkbox
    const reqCheckbox = (value) => {
        if(value !== true)  
            return 'Please agree to the terms and conditions'
    }

export default reduxForm({
    form: "signupForm"
})(SignupForm);