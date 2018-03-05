// import from libraries
import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Container, Grid, Header, Button, Form} from 'semantic-ui-react'

//local import
// import {require, valLength, isEmail} from "../reusable/forms";
// import {MyInput, MyCheckBox, PasswordInput} from '../reusable/inputForm';
// import {startSignUp} from '../actions/index';

import {FormInput, CheckInput} from '../reusable/inputs'
import Mail from '../../assets/Mail.svg';
import User from '../../assets/User.svg';
import Password from '../../assets/locked.svg'
import SignupForm from '../containers/signupForm'


class SignUp extends Component {
    constructor(props) {
       super(props);
       this.state = {
           check: false
       };

    //    this.handleAgree = this.handleAgree.bind(this)
    }

    // renderFiledInput({ input, label, type, meta: {touched, error, warning, active}, placeholder, forLabel }) {
    //     const hasError = !active && touched && error !== undefined;
    //     return (
    //         <MyInput  HtmlFor={forLabel}
    //                 Label={label}
    //                 Type={type}
    //                 Placeholder={placeholder}
    //                 Inputs={input}
    //                 HasError={hasError}
    //                 Error={error} />
    //     );
    // }

    // renderFieldPassword({input, label, type, meta: {touched, error, warning, active}, placeholder, forLabel}) {
    //     const hasError = !active && touched && error !== undefined;
    //     return (
    //         <PasswordInput  HtmlFor={forLabel}
    //                   Label={label}
    //                   Placeholder={placeholder}
    //                   Inputs={input}
    //                   HasError={hasError}
    //                   Error={error} />
    //     );
    // }

    // renderCheckbox({input, label, meta: {touched, error, warning}, forLabel, icons }) {
    //     const hasError = touched && error !== undefined;
    //     return (
    //         <MyCheckBox
    //             Label={label}
    //             ForLabel={forLabel}
    //             HasError={hasError}
    //             Error={error}
    //             Inputs={input}
    //             icons_={icons} />
    //            // handleAgree={this.handleAgree}
    //     );
    // }

    // handleAgree() {
    //     this.setState({ check: !this.state.check});
    // }

    // onFomSubmit({FirstName, LastName, Email, Password, Agree}) {
    //     const {reset, history} = this.props;

    //     if (!Agree) {
    //         throw new SubmissionError({
    //             Agree: 'Please agree to the terms and conditions'
    //         })
    //     }

    //     this.props.startSignUp({FirstName, LastName, Email, Password, Agree, history})
    //     this.setState({check: false});
    //     reset()
    // }

    render() {

        // const { handleSubmit } = this.props;
        // const icons = this.state.check;

        return (
            <Container fluid className="signup">
                <Grid centered stackable className="signup__grid">
                    <Grid.Column computer={6} tablet={5}>
                        <div className="signup__left">
                            <Header as="h1" className="signup__logo">
                                djumper
                            </Header>
                            <div className="signup__caracteristics">
                                easy - flexibel - smart
                            </div>
                            <p className="signup__description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                l'imprimerie 0depuis les années 1500, quand un peintre. </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={6} tablet={7}>
                        <div className="create_account__outside">
                            <div className="create_account__box">
                                <Header as="h3" content="create an account" 
                                        className="create_account__title" 
                                        textAlign="center" />

                                <Form className="_my-form" size="large">

                                    <SignupForm />

                                    <span className="signup__btn sign__btn"> Sign up </span>                                   

                                </Form>

                                <div className="account__already">
                                    <span>Already a DJUMPER account? </span>
                                    <Link to="/login"><span>Log in </span></Link>    
                                </div>

                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        );

    }
}



// SignUp = connect(null, {startSignUp})(SignUp);

export default SignUp;







// SignUp.PropTypes = {
//     forLabel: PropTypes.string,
//     label: PropTypes.string,
//     placeholder: PropTypes.string,
//     type: PropTypes.string,
//     error: PropTypes.string
// }




{/* <Form onSubmit={handleSubmit(this.onFomSubmit.bind(this))} className="_my-form" size="large">


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
    component={this.renderFieldPassword}
    label="Password"
    forLabel="password"
    placeholder="Password"
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

</Form> */}