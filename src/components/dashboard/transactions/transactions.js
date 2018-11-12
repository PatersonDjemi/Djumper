import React, { Component } from 'react';

import Layout from '../withSideBarLayout'
import FilterOptions from "../articles/filterOptions";
import TransactionContainer from "@containers/transactionContainer";

const Transactions  = () => {
    return (
        <React.Fragment>

            <FilterOptions />

            <Layout.LayoutWithSideBar>
                <Layout.MainContent>

                    <TransactionContainer />

                </Layout.MainContent> 
            </Layout.LayoutWithSideBar>

        </React.Fragment>

    )
};

export default Transactions;