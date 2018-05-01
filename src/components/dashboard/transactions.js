import React, { Component } from 'react';
import {Container, Grid, Header, Image } from 'semantic-ui-react';
import Layout from './withSideBarLayout'

const Filter = (props) => {
    return (
        <div>

        </div>
        
    )
}

class Transactions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout.LayoutWithSideBar>
                <Layout.MainContent>
                    <div className="filter">
                        <div className="filter__btn"> start </div>
                        <div className="filter__btn"> end </div>
                    </div>
                </Layout.MainContent>  

                <Layout.Sidebar>
                    ji
                </Layout.Sidebar>      
            </Layout.LayoutWithSideBar>
        )
    }

}

export default Transactions;