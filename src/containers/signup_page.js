// import from libraries
import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link, Route } from 'react-router-dom';
import { Container, Grid, Header, Button, Form} from 'semantic-ui-react'


import {FormInput, CheckInput} from '../reusable/inputs'
import Mail from '../../assets/Mail.svg';
import User from '../../assets/User.svg';
import Password from '../../assets/locked.svg'
import SignupForm from './signupForm'
import Loader from '../reusable/Loader'
import ThankYOu from '../components/thankyou'


class SignUp extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }

        this.isLoading = this.isLoading.bind(this);
    }


    isLoading() {
        // displays the loader
        this.setState({isLoading: true});
    }

    shouldComponentUpdate(nextProps, nextState) {
        // invoks après que le component ait recu les props
        // ici nextProps = this.props
        const { authUser, history } = nextProps;
        
        if ( authUser.authenticated === 'pending') {
        //     // on redirige ici vers le dashboard
            history.push('/thankyou');
        //     // empeche le component de rerendern
        //     // si on retourne true le component rendern tjrs après avoir changé de page
            return false;
        } 

        return true;
    }

    // don´t need this step anymore, react will rerender with the initaial state anyway
    componentWillReceiveProps(nextProps) {        
        if (!this.props.authUser.authenticated && (nextProps.authUser.authenticated !== true) ) {
            // change state for the loader here
            this.setState({isLoading: false});
        }
    }

    render() {
        
        const loader = this.state.isLoading ? <Loader /> : null;

        return (
            <div>
                
                { loader }

                <Container fluid className="signup">
                    <Grid centered stackable className="signup__grid">
                        <Grid.Column computer={7} tablet={7}>
                            <div className="signup__left">
                                <Header as="h1" className="signup__logo">
                                   <Link to="/">djumper</Link> 
                                </Header>
                                <div className="signup__caracteristics">
                                    easy - flexibel - smart
                                </div>
                                <p className="signup__description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie 0depuis les années 1500, quand un peintre. </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={7} tablet={9}>
                            <div className="create_account__outside">
                                <div className="create_account__box">
                                    <Header as="h3" content="create an account" 
                                            className="create_account__title" 
                                            textAlign="center" />

                                        <SignupForm  loading={this.isLoading} />                                   
        
                                    <div className="account__already">
                                        <span>Already a DJUMPER account? </span>
                                        <Link to="/login"><span>Log in </span></Link>    
                                    </div>
        
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        authUser: state.authentication
    }
}

export default connect(mapStateToProps)(SignUp);


