import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import {MyModalHeader, MyModalContent, MyModalFooter} from '../reusable/modals';
import Login from '../containers/login'


const LoginPage = (props) => {
    return (
        <div id="page_div">
            <div id="center_content">
                <div id="content_login">
                    <Grid className="_noMargin" stackable centered>

                        <MyModalHeader ModalTitle="Log In" className="myModalTitle"/>

                        <MyModalContent>
                            <Login history={props.history} />
                        </MyModalContent>

                        <MyModalFooter>
                            <div className="haventAccount">
                                <span> Don't you have an account?</span>
                                <span> <Link to="/signup"> Sign up </Link> </span>
                            </div>
                        </MyModalFooter>

                    </Grid>
                </div>
            </div>

        </div>
    );
}


export default LoginPage;