import React,  { Component} from 'react';
import {Container, Grid, Header, Image } from 'semantic-ui-react';
import { Route, Redirect, Switch } from 'react-router-dom'

import user from '../../assets/lnr-user.svg'

import Loader from '../reusable/Loader'

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



class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('see the props: ', this.props)

        const {  url, path } = this.props.match;

        return (
            <div className="dashboard">
               <Route path={path} component={Dashmenu} />
                <Dashcontent>
                    <Switch>
                        <Route path={`${url}/account`} component={Account} />
                        <Route path={`${url}/transactions`} component={Transactions} />
                        <Route path={`${url}/articles`} component={Articles} />
                        <Route path={`${url}/sendmoney`} component={SendMoney} />
                        <Route path={`${url}/createcheck`} component={CreateCheck} />
                        {/* <Route path={`${url}/finduser`} component={Account} /> */}
                        <Route path={`${url}/settings`} component={Settings} />
                        <Route path={`${url}/help`} component={Help} />

                        <Redirect from={url} exact to={`${url}/account`} />
                    </Switch>

                </Dashcontent>
            </div>
    
        );
    }

}

export default Dashboard;

    // bon à savoir
// en ajoutant push ds le redirect component, on navigue vers l endroit souhaité, cependant on peut faire un retour en arrière en cliquant sur precédant
// si on ne met pas de push, alors on navigue vers une nouvelle addresse qui devient elle notre point d entrée, (pas de précedant)
// si on use from ds redirect, alors le redirect doit etre ds un switch