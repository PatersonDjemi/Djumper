import React from 'react';
import {Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

// import {MyModalHeader, MyModalContent, MyModalFooter} from '../reusable/modals';
// import Login from '../containers/login'

import { FormInput } from '../reusable/inputs';
import Mail from '../../assets/Mail.svg';
import Password from '../../assets/locked.svg'
import LoginForm from '../containers/loginForm'


const LoginPage = (props) => {
    return (
        <Container fluid className="login">
            <div className="login__outside_box">

                <div className="signin__left">
                   <h2 className="login__logo">djumper</h2>
                   <div className="login__title">                    
                            welcome back        
                   </div>                   

                    <LoginForm history={props.history} />                   

                   <div className="create__account">
                        <span>Don´t have an account yet ? </span>
                         <Link to="/signup"> <span> Sign up </span> </Link> 
                   </div>
                </div>


                <div className="signin__right">
                    image
                </div>
            </div>
        </Container>
    );
}

export default LoginPage;


