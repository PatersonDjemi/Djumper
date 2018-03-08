// import from libraries
import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Container, Grid, Header, Button, Form} from 'semantic-ui-react'


import {FormInput, CheckInput} from '../reusable/inputs'
import Mail from '../../assets/Mail.svg';
import User from '../../assets/User.svg';
import Password from '../../assets/locked.svg'
import SignupForm from '../containers/signupForm'


const SignUp = (props) => {

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

                                <SignupForm history={props.history} />                                   

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


export default SignUp;


