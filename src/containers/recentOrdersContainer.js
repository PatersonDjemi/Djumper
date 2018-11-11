import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Grid, Button, Header, Segment } from 'semantic-ui-react';

const segmentStyle = {
    minHeight: 10+"rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3.5+"rem"
};

class RecentOrders extends Component {
    static mapStateToProps({articles}) {
        return { articles };
    }

    render() {
        return (
            <Grid.Row>
                <Grid.Column style={{marginTop: 4 + "rem"}}>
                    <div className="last__transactions" style={{ position: 'relative'}}>
                        <Header as="h3" content="Most recent orders" className="last__activities__title" />
                        <div className="last__activities__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                        </div>
                        <Link to="/dashboard/articles"> <Button primary content="View all" size="big" className="btn__view_all"></Button> </Link>
                    </div>
                    <Segment style={segmentStyle}>
                        <span style={{ fontSize: '17px', fontWeight: 500 }}> No orders available </span> 
                    </Segment> 
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default connect(RecentOrders.mapStateToProps)(RecentOrders);
