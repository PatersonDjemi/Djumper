import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import { Container, Grid, Header} from 'semantic-ui-react'

import SignupForm from '@components/signup/signupForm'
import Loader from '@reusable/Loader'
import ShowError from '@components/showError'

import { signupStart } from '@actions/index'


class SignUp extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }

        this.signUserUp = this.signUserUp.bind(this);
    }

    static mapStateToProps({authentication}) {
        return {
            authUser: authentication
        }
    }

    static getDerivedStateFromProps(props) {
        if (props.authUser.authenticated) {
            return {
                isLoading: false
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // invoks après que le component ait recu les props
        // ici nextProps = this.props
        const { authUser, history } = nextProps;

        if ( authUser.authenticated === true ) {
        // on redirige ici vers le dashboard
            history.push('/dashboard');
        // empeche le component de rerendern
        // si on retourne true le component rendern tjrs après avoir changé de page
            return false;
        } 

        return true;
    }

    signUserUp({first, last, email, password, agree}) {
        // displays the loader
        this.setState({isLoading: true});
        // call the action creator
        this.props.signupStart({first, last, email, password, agree});
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
                                <p className="signup__description">Le Lorem Ipsum est simplement du 
                                    faux texte employé dans la composition et la mise en page avant 
                                    impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                                    0depuis les années 1500, quand un peintre. 
                                </p>
                            </div>
                        </Grid.Column>

                        <Grid.Column computer={7} tablet={9}>
                            <div className="create_account__outside">

                                <div className="create_account__box">

                                    <Header as="h3" content="create an account" 
                                            className="create_account__title" 
                                            textAlign="center" />

                                    <SignupForm callSignUpStart={this.signUserUp}  />                                  
        
                                    <div className="account__already">
                                        <span>Already a DJUMPER account? </span>
                                        <Link to="/login"><span>Log in </span></Link>    
                                    </div>
        
                                </div>
                            </div>

                            <ShowError Bottom='57' Left='-31' /> 

                        </Grid.Column>

                    </Grid>
                </Container>

            </div>

        );
    }
}



export default connect(SignUp.mapStateToProps, { signupStart })(SignUp);


