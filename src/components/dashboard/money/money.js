import React, { Component } from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'

import Layout from '../withSideBarLayout'
import Calendar from '@assets/Calendar.svg'

import Description from './moneyDescription';
import MoneyTaskRoutes from './moneyTaskRoutes'

class Money extends Component {

    render() {
        console.log('rendering here', this.props.match);
        return (
            <React.Fragment>

                {/* <Redirect to={`${this.props.match.url}/sendmoney`} /> */}

                <Description match={this.props.match} /> 

                <Layout.LayoutWithSideBar>

                    <Layout.MainContent>

                        <MoneyTaskRoutes match={this.props.match} />          

                    </Layout.MainContent>

                    <Layout.Sidebar>

                        side
                    </Layout.Sidebar>     

                </Layout.LayoutWithSideBar>

            </React.Fragment>   
        )
    }

}

export default Money;

