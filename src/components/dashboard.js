import React,  { Component} from 'react';
import {Container, Grid, Header, Image } from 'semantic-ui-react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import user from '@assets/lnr-user.svg'

import Loader from '@reusable/Loader'

// my components here
import Dashmenu from './dashmenu'
import Dashcontent from './dashcontent'
import Account from './dashboard/account'
import Transactions from './dashboard/transactions'
import Articles from './dashboard/articles'
import SendMoney from './dashboard/sendmoney'
import CreateCheck from './dashboard/createcheck'
import Settings from './dashboard/settings'
import Help from './dashboard/help'


// actions creators
import { fetchArticles } from '@actions'



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    static mapStateToProps({ articlesReducer }) {
        return {
            items: articlesReducer.articles
        }
    }

    static getDerivedStateFromProps(nextProps) { // can´t access the this.props here
        if ( nextProps.items ) {
            // returns an object that updates the state
            return { isLoading: false };
        }

        return null;

    }

    componentDidMount() {
        // fetch data from the server here
        if (!this.props.items) {
            // action for fetching data from the server
            this.props.fetchArticles()
        }
        console.log('dashboard mounted')
    }

    componentWillUnmount() {
        console.log('dashboard unmounting')
    }

    render() {
        console.log('props of dashboard ', this.props);

        const {  url, path } = this.props.match;
        const theItems = this.props.items ? this.props.items : null;

        return (
            <div className="dashboard">
               <Route path={path} component={Dashmenu} />
                <Dashcontent loading={this.state.isLoading} items={theItems} >
                    <Switch>
                        <Route path={`${url}/account`} render={ props => <Account {...props} theItems={theItems} />} />
                        <Route path={`${url}/transactions`} component={Transactions} />
                        <Route path={`${url}/articles`} component={Articles} />
                        <Route path={`${url}/sendmoney`} component={SendMoney} />
                        <Route path={`${url}/createcheck`} component={CreateCheck} />
                        <Route path={`${url}/settings`} component={Settings} />
                        <Route path={`${url}/help`} component={Help} />
                        <Redirect from={url} exact to={`${url}/account`} />
                    </Switch>
                </Dashcontent>
            </div>    
        );
    }

}

export default connect(Dashboard.mapStateToProps, { fetchArticles })(Dashboard);

    // bon à savoir
// en ajoutant push ds le redirect component, on navigue vers l endroit souhaité, cependant on peut faire un retour en arrière en cliquant sur precédant
// si on ne met pas de push, alors on navigue vers une nouvelle addresse qui devient elle notre point d entrée, (pas de précedant)
// si on use from ds redirect, alors le redirect doit etre ds un switch