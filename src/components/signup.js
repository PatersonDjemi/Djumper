// import from libraries
import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Container, Grid, Header, Button, Form} from 'semantic-ui-react'

//local import
import {require, valLength, isEmail} from "../reusable/forms";
import {MyInput, MyCheckBox} from '../reusable/inputForm';



class SignUp extends Component {
    constructor(props) {
       super(props);
       this.state = {
           check: false
       }

       this.handleAgree = this.handleAgree.bind(this)
    }

    renderFiledInput({ input, label, type, meta: {touched, error, warning}, placeholder, forLabel }) {
        const hasError = touched && error !== undefined;
        return (
            <MyInput  HtmlFor={forLabel}
                    Label={label}
                    Type={type}
                    Placeholder={placeholder}
                    Inputs={input}
                    HasError={hasError}
                    Error={error} />
        );
    }

    renderCheckbox({input, label, meta: {touched, error, warning}, forLabel, icons }) {
        const hasError = error;
        return (
            <MyCheckBox
                Label={label}
                ForLabel={forLabel}
                HasError={hasError}
                Error={error}
                Inputs={input}
                icons_={icons} />
               // handleAgree={this.handleAgree}
        );
    }

    handleAgree() {
        this.setState({ check: !this.state.check});
    }


    onFomSubmit(values) {
        const {reset} = this.props;

        if (!values.Agree) {
            throw new SubmissionError({
                Agree: 'Please agree to the terms and conditions'
            })
        }

        console.log(values);
        // clear the form after submitting it
        reset()
    }


    render() {

        const { handleSubmit } = this.props;
        const icons = this.state.check;

        return (
            <Container fluid className="_signUpPage">
                <Grid centered stackable className="kis">
                    <Grid.Column computer={7} tablet={5}>
                        <div className="_text-description">
                            <Header as="h1" className="_appName" textAlign="left" size="massive">
                                DJUMPER
                            </Header>
                            <Header as="h2" textAlign="left" className="_caracteristics">
                                EASY - FLEXIBEL - SMART
                            </Header>
                            <p className="_DescriptionSignUp">Le Lorem Ipsum est simplement du faux texte employé dans la composition <br/> et la
                                mise en page avant impression. Le Lorem Ipsum est le faux texte standard <br/> de
                                l'imprimerie
                                0depuis les années 1500, quand un peintre</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={7}>
                        <div className="_FormDiv">
                            <div className="_FormContent">
                                <Header as="h1" content="CREATE AN ACCOUNT" className="_formTitel" textAlign="center"/>

                                <Form onSubmit={handleSubmit(this.onFomSubmit.bind(this))} className="_my-form" size="large">


                                    <Field
                                        name="FirstName"
                                        component={this.renderFiledInput}
                                        label="First Name"
                                        forLabel="firstName"
                                        placeholder="First Name"
                                        type="text"
                                        validate={[reqFirstName, valFirstName]}
                                    />
                                    <Field
                                        name="LastName"
                                        component={this.renderFiledInput}
                                        label="Last Name"
                                        forLabel="lastName"
                                        placeholder="Last Name"
                                        type="text"
                                        validate={[reqLastName, valLastName]}
                                    />
                                    <Field
                                        name="Email"
                                        component={this.renderFiledInput}
                                        label="Email"
                                        forLabel="email"
                                        placeholder="Email"
                                        type="email"
                                        validate={[reqEmail, myEmail]}
                                    />
                                    <Field
                                        name="Password"
                                        component={this.renderFiledInput}
                                        label="Password"
                                        forLabel="password"
                                        placeholder="Password"
                                        type="password"
                                        validate={[reqPassword, valPassword]}
                                    />
                                    <Field
                                        name="Agree"
                                        component={this.renderCheckbox}
                                        label="I agree to the Terms and Conditions.Le Lorem Ipsum est simplement
                                               du faux texte employé dans la composition et la
                                             mise en page avant impression. Le Lorem Ipsum est"
                                        forLabel="agree"
                                        icons={icons}
                                        validate={checkedBox}
                                        onChange={this.handleAgree}
                                    />

                                    <Button primary size="big" className="_sign-up-button" fluid> SIGN UP </Button>

                                </Form>

                                <div className="_already-account">
                                    <Header as="h5" textAlign="center" size="small">
                                        Already have a DJUMPER account ? <Link to="/"> login</Link>
                                    </Header>
                                </div>

                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        );

    }
}

// call the function for validating every input
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
const checkedBox = (value) => {
    console.log('my check is ', value);
}



export default reduxForm({
    form: "SignUpForm"
})(SignUp);



SignUp.PropTypes = {
    forLabel: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string
}


