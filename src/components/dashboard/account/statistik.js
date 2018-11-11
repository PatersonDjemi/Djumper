import React from "react";
import {Grid, Header, Segment } from 'semantic-ui-react';

const StatistikBoard = (props) => {
    return (
        <Grid.Row>
            <Grid.Column>
                <Header as="h3" content="Statistiks" className="statistik__header" />
                <div className="statistik__description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                </div>
                <Segment className="statistik__left">
                    <span style={{ fontSize: '17px', fontWeight: 500 }}> Statistik left </span> 
                </Segment> 
            </Grid.Column>
        </Grid.Row>
    );
};

export default StatistikBoard;