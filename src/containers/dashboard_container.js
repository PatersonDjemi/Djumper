import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link, Route, Redirect } from 'react-router-dom';


import Dashboard from '@components/dashboard';
import { tellToLogin } from '@actions'



class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.pleaseLoginFirst = this.pleaseLoginFirst.bind(this);
    }

    static mapStateToProps( {authentication} ) {
        return {
            userAuth: authentication.authenticated
        }
    }
    

    componentDidMount() {
        console.log('dashboard container is mounted ')
    }


    componentWillUnmount(){
        console.log('dashboard container will unmount')
    }


    pleaseLoginFirst() {
        // update de reducer in oder to print a message
        // later in the login component
        this.props.tellToLogin();

        return (
            <Redirect from={this.props.match.url} to={`/login`} />     
        )
    }


    render() {

        const { userAuth, path } = this.props;

        // change later the condition to check if authenticated is true
        return ( 
            <Route path={this.props.path}  render={ props => {
                return !userAuth ? <Dashboard {...props} userAuth={userAuth} /> : this.pleaseLoginFirst()  } }
            /> 
        );

    }

}




export default connect(DashboardContainer.mapStateToProps, { tellToLogin })(DashboardContainer);


