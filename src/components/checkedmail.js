import React, { Component } from 'react';
import {Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { autoLogin } from '../actions';

import Loader from '../reusable/Loader'


import Footer from './footer';

class CheckMail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        const { authUser } = this.props;
        const { token } =this.props.match.params;

        if ( authUser.authenticated !== true) {
            // action for signin
            let decoded = this.props.match.params.token;
            decoded =  decoded.replace(/\@@/g, '.');

            console.log('decoded token will look like ', decoded)
            console.log('type of decoded is ', typeof(decoded))
            this.props.autoLogin(decoded)
            this.setState({isLoading: true})
            // console.log('token name is non decode ', this.props.match.params.token)
        } 

    }

    shouldComponentUpdate(nextprops, nexState) {
        const { authUser, history } = nextprops;
        
        if ( authUser.authenticated === true) {
            history.push('/dashboard');
            return false;
        } 

        return true;
    }

    componentWillReceiveProps(nextprops){
        if( !this.props.authUser.authenticated && (nextprops.authUser.authenticated !== true) ) {
            this.setState({isLoading: false})
        }
    }


    render() {

        console.log('auth user', this.props.authUser)

        return (
            <div>

                { this.state.isLoading? <Loader/> : null }

                <div className="thanks">
                    <Container fluid>
                        <Grid stackable centered>
                            <Grid.Column computer={16}>
                                <div className="thankyou__text">
                                    <h4 className="thankyou__text_title">
                                        Thank you for the verification
                                    </h4>
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={5}>
                                <div className="thankyou__text_explain">
                                    Your email is verified. You can start using djumper now
                                </div>
                            </Grid.Column>                
                        </Grid>
                    </Container>
        
                    <div className="thanks__footer">
                        <Footer />
                    </div>
    
                </div>

            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        authUser: state.authentication
    }
}


export default connect(mapStateToProps, { autoLogin })(CheckMail) ;