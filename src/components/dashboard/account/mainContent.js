import React from "react";
import { Grid } from 'semantic-ui-react';

import StatistikBoard from "./statistik";
import RecentOrders from "@containers/recentOrdersContainer";

const MainContent = (props) => {
    return (
        <Grid stackable>
            <Grid.Column width={15}>
                <Grid stackable>
                    <StatistikBoard />
                    <RecentOrders />
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default MainContent;