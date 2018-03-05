import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import { Button, Form} from 'semantic-ui-react'


import { valLength , isEmail, require } from '../reusable/forms';
import {MyInput} from '../reusable/inputForm';
import {startLogIn} from '../actions/index';


class LogIn extends Component {
    constructor(props) {
        super(props)
    }

    renderFiledInput({ input, label, type, meta: {touched, error, warning, active}, placeholder, forLabel }) {

        const hasError = !active && touched && error !== undefined;

        return (

            <MyInput  HtmlFor={forLabel}
                      Label={label}
                      Type={type}
                      Placeholder={placeholder}
                      Inputs={input}
                      HasError={hasError}
                      Error={error}
                      labelClass="_labelLogin"/>

        );
    }

    onFormSubmit({Email, Password}) {
        const { reset, history } = this.props;
        //make the call to the server
        this.props.startLogIn({Email, Password, history});
        reset()
    }

    render() {

        const {handleSubmit, error} = this.props;

        return (

            <Form className="_form" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field
                    name="Email"
                    label="Email"
                    type="text"
                    placeholder="Email"
                    forLabel="email_"
                    component={this.renderFiledInput}
                    validate={[reqEmail, myEmail]} />
                    
                <Field
                    name="Password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    forLabel="password_"
                    component={this.renderFiledInput}
                    validate={[reqPassword, valPassword]}
                />
                <div className="resetPassword">

                    <Link to="/"> <span> Forgot you password? </span></Link>

                </div>

                { error && <h3 className="error_server">{error}</h3> }

                <Button primary size="big" className="_log-in-button" fluid> SIGN UP </Button>

            </Form>

        );
    }
}

// for the email
const reqEmail = require("Email");
const myEmail = isEmail("Email");

// for the password
const reqPassword = require("Password");
const valPassword = valLength("Password", 5, 100);


function mapStateToProps(state) {
    return { error: state.authentication.error };
}

LogIn = connect(mapStateToProps, {startLogIn})(LogIn)


export default reduxForm({
    form: "LoginForm"
})(LogIn);