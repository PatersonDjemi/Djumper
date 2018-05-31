import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link, Route, Redirect } from 'react-router-dom';


import Dashboard from '../components/dashboard';
import { tellToLogin } from '../actions/index'




class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.plzloginfirst = this.plzloginfirst.bind(this);
    }

    static mapStateToProps( {authentication} ) {
        return {
            auth_user: authentication
        }
    }
    
    plzloginfirst() {
        // update de reducer in oder to print a message
        // later in the login component
        this.props.tellToLogin();
    }


    render() {

        const { authenticated } = this.props.auth_user;
        // change later the condition to check if authenticated is true
        if (!authenticated) { 
            return <Route path={this.props.match.path} component={Dashboard} />
        }

        this.plzloginfirst();

        return (
            <Redirect from={this.props.match.url} to={`/login`} />     
        )
    }

}




export default connect(DashboardContainer.mapStateToProps, { tellToLogin })(DashboardContainer);


