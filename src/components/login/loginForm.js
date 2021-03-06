import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';
import { Link } from 'react-router-dom'



import { FormInput } from '../../reusable/inputs';
import Mail from '@assets/Mail.svg';
import Password from '@assets/locked.svg';

import { valLength , isEmail, myRequire } from '@reusable/forms';



class LoginForm extends Component {

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

    submitLogin(allValueFields) {

        const { reset, callLoginStart } = this.props;
        this.props.loading()
        // call the action creator
        callLoginStart(allValueFields);     
        // clear the input fields
        reset();        
    }

    render () {

        const { handleSubmit } = this.props;

        return (
            <div className="login__form">
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


                <div className="setting">

                    <span className="login__btn sign__btns" 
                          onClick={handleSubmit(this.submitLogin.bind(this))} >

                        Log in &rsaquo;

                    </span>

                </div> 
            </div>         
        );
    }
}


// for the email
const reqEmail = myRequire("Email");
const myEmail = isEmail("Email");

// for the password
const reqPassword = myRequire("Password");
const valPassword = valLength("Password", 5, 100);


export default reduxForm({
    form: 'login_form'
})(LoginForm)