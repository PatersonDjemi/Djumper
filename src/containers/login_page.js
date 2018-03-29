import React, { Component } from 'react';
import {Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { FormInput } from '../reusable/inputs';
import Mail from '../../assets/Mail.svg';
import Password from '../../assets/locked.svg'
import LoginForm from './loginForm'
import Loader from '../reusable/Loader'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }

        this.isLoading = this.isLoading.bind(this);
    }

    isLoading() {
        this.setState({isLoading: true})
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { authUser, history } = nextProps;

        if (authUser.authenticated) {
            history.push('/dashboard');
            return false;
        }

        return true;
    }

    render () {

        const loader = this.state.isLoading ? <Loader /> : null;

        return (

            <div>

                { loader }

                <Container fluid className="login">
                    <div className="login__outside_box">
        
                        <div className="signin__left">
                            <h2 className="login__logo">
                                <Link to="/">djumper</Link> 
                            </h2>
                            <div className="login__title">                    
                                        welcome back        
                            </div>                   
        
                            <LoginForm loading={this.isLoading} />                   
        
                            <div className="create__account">
                                <div className="password__forget">
                                    <Link to="/">
                                        <span className="password_forgets">
                                                forget password?
                                        </span>
                                    </Link>
                                </div>

                                <span>Don´t have an account yet ? </span>
                                <Link to="/signup"> <span> Sign up </span> </Link> 
                            </div>
                        </div>        
        
                        <div className="signin__right">
                            image. mettre l image de ce block en background
                            quand le block ci disparait
                        </div>
                    </div>
                </Container>
            </div>

        );
    }

}

function mapStateToProps ({authentication}) {
    return {
        authUser: authentication
    }
}

export default connect(mapStateToProps)(LoginPage);


