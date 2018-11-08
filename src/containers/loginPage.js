import React, { Component } from 'react';
import {Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginForm from '@components/login/loginForm'
import Loader from '@reusable/Loader'
import ShowError from '@components/showError'

import { loginStart } from '@actions'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }

        this.logUserIn = this.logUserIn.bind(this);
    }

    static mapStateToProps ({authentication}) {
        return {
            authUser: authentication
        }
    }

    logUserIn({email, password}) {
        this.props.loginStart({email, password});
        this.setState({isLoading: true})
    }

    shouldComponentUpdate(nextProps) {
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
        
                            <LoginForm callLoginStart={this.logUserIn} loading={this.isLoading} />                   
        
                            <div className="create__account">

                                <div className="password__forget">
                                    <Link to="/">
                                        <span className="password_forgets">
                                                forget password?
                                        </span>
                                    </Link>
                                </div>

                                <span> Don´t have an account yet ? </span>

                                <Link to="/signup"> <span> Sign up </span> </Link>  

                            </div>

                        </div>        
        
                        <div className="signin__right"> image. 
                            <ShowError Bottom='10' Left='2' />
                        </div>

                    </div>
                </Container>
            </div>
        );
    }

}


export default connect(LoginPage.mapStateToProps, { loginStart })(LoginPage);


