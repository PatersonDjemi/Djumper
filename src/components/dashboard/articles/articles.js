import React from "react";
import { Grid } from "semantic-ui-react";

import Layout from "../withSideBarLayout";
import FilterOptions from "./filterOptions";
import Orders from "@containers/ordersContainer";

const Articles  = () => {
    return (
        <React.Fragment>

            <FilterOptions />

            <Layout.LayoutWithSideBar>
                <Layout.MainContent>

                    <Orders />

                </Layout.MainContent>
            </Layout.LayoutWithSideBar>
            
        </React.Fragment>
    );
}

export default Articles;

 {/* { this.renderProductsReview() }     */}


