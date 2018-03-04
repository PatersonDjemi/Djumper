import React from 'react';
import {Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

// import {MyModalHeader, MyModalContent, MyModalFooter} from '../reusable/modals';
// import Login from '../containers/login'

import { FormInput } from '../reusable/inputs';
import Mail from '../../assets/Mail.svg';
import Password from '../../assets/locked.svg'


const LoginPage = (props) => {
    return (
        <Container fluid className="login">
            <div className="login__outside_box">

                <div className="signin__left">
                   <h2 className="login__logo">djumper</h2>
                   <div className="login__title">
                        {/* <span className="welcomme"> */}
                            welcome back
                        {/* </span> */}
                   </div>
                   <div className="login__form">

                        <FormInput className="login__form_input form__icons"
                            placeholder="Email"
                            type="email"
                            url={Mail} />

                        <FormInput className="login__form_input form__icons" 
                            placeholder="Password"
                            type="password"
                            url={Password} />

                   </div>
                   <div className="setting">
                       <Link to="/">
                            <span className="password_forget">
                                    forget password?
                            </span>
                       </Link>
                        <span className="login__btn sign__btn">
                            Log in &rsaquo;
                        </span>
                   </div>
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

// const LoginPage = (props) => {
//     return (
//         <div id="page_div">
//             <div id="center_content">
//                 <div id="content_login">
//                     <Grid className="_noMargin" stackable centered>

//                         <MyModalHeader ModalTitle="Log In" className="myModalTitle"/>

//                         <MyModalContent>
//                             <Login history={props.history} />
//                         </MyModalContent>

//                         <MyModalFooter>
//                             <div className="haventAccount">
//                                 <span> Don't you have an account?</span>
//                                 <span> <Link to="/signup"> Sign up </Link> </span>
//                             </div>
//                         </MyModalFooter>

//                     </Grid>
//                 </div>
//             </div>

//         </div>
//     );
// }