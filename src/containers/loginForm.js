import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';


import { FormInput } from '../reusable/inputs';
import Mail from '../../assets/Mail.svg';
import Password from '../../assets/locked.svg';

import { valLength , isEmail, require } from '../reusable/forms';





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



    render () {
        return (
            <div>
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
            </div>           
        );
    }
}


// for the email
const reqEmail = require("Email");
const myEmail = isEmail("Email");

// for the password
const reqPassword = require("Password");
const valPassword = valLength("Password", 5, 100);


export default reduxForm({
    form: 'login_form'
})(LoginForm)