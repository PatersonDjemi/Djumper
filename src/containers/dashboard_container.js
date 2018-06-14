import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link, Route, Redirect } from 'react-router-dom';


import Dashboard from '@components/dashboard';
import { tellToLogin } from '@actions'



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
    

    componentDidMount() {
        console.log('my component is mounted ')
    }


    componentWillUnmount(){
        console.log('my component will unmount')
    }


    plzloginfirst() {
        // update de reducer in oder to print a message
        // later in the login component
        this.props.tellToLogin();

        return (
            <Redirect from={this.props.match.url} to={`/login`} />     
        )
    }


    render() {

        const { auth_user, path } = this.props;

        // change later the condition to check if authenticated is true

        return <Route path={this.props.path} render={ props => {
          return !auth_user.authenticated ?
            React.createElement(Dashboard, {...props, ...auth_user}) : this.plzloginfirst()
        }} />

    }

}




export default connect(DashboardContainer.mapStateToProps, { tellToLogin })(DashboardContainer);


