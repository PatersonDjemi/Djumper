import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';


import {FormInput, FormInputPassword, CheckInput} from '@reusable/inputs'


import Mail from '@assets/Mail.svg';
import User from '@assets/User.svg';
import Password from '@assets/locked.svg'


import { valLength , isEmail, require } from '@reusable/forms';


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
                placeholder={placeholder}
                type={type}
                url={url}
                input={input}
                hasError={hasError}
                error={error} />
        );
    }

    renderInputFieldPassword({input, 
        meta: {touched, error, active},
        placeholder, type, url} ) {

        const hasError = touched && !active && error !== "undefined";

        return (
            <FormInputPassword className="login__form_input form__icons"
                placeholder={placeholder}
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

    submitSignup(allValueFields) {

        const { reset, callSignUpStart } = this.props;
        this.props.loading();         
        // call the action creator on the parent component
        callSignUpStart(allValueFields)     
        // clear the fields input
        reset()
    }

    render () {

        const { handleSubmit } = this.props;
        
        return (
            <div style={{paddingTop: 1.5 + 'rem', paddingBottom: 1.5 + 'rem'}}>

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
                    component={this.renderInputFieldPassword}
                    placeholder="Password"
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


/* ---- call the function for validating every input ---- */
    // for the first name
    const reqFirstName = require("First Name");
    const valFirstName = valLength("First Name", 4, 50);
    
    // for the last name
    const reqLastName = require("Last Name");
    const valLastName = valLength("Last Name", 4, 20);
    
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