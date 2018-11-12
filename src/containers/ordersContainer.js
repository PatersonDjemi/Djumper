import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Header, Segment } from "semantic-ui-react";

const segmentStyle = {
    minHeight: 10+"rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3.5+"rem"
};

class Orders extends Component {

    static mapStateToProps ({ articles }) {
        return { articles };
    }

    render() {
        return (
            <Grid stackable>

                <Grid.Row>
                    <Grid.Column width={15}>
                        <Header as='h3' className="transactions__title"> Articles </Header>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                                voluptua. At vero eos et accusam et justo duo
                            </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={15}>
                        <Segment style={segmentStyle}>
                            <span style={{ fontSize: '17px', fontWeight: 500 }}> No orders available </span> 
                        </Segment> 
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        );
    }

}

export default connect(Orders.mapStateToProps)(Orders);