import React from 'react';
import { Route } from 'react-router-dom';
import  { Grid } from 'semantic-ui-react';

import SendMoney from './sendmoney'
import RequestMoney from './requestmoney';
import CreateCheck from './createcheck'

const MoneyTaskRoutes = (props) => (

    <Grid stackable columns={16} >   
        <Route path={`${props.match.url}/sendmoney`} component={SendMoney} />
        <Route path={`${props.match.url}/requestmoney`} component={RequestMoney} />
        <Route path={`${props.match.url}/createcheck`} component={CreateCheck} />   
    </Grid>

);

export default MoneyTaskRoutes;