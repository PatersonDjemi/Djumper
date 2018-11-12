import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import TransactionBlock from "@components/dashboard/transactions/transactionBlock";

const segmentStyle = {
    minHeight: 10+"rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3.5+"rem"
};

class TransactionContainer extends Component {

    static mapStateToProps ( ){ // à rempplir
        return ; // à remplir
    }

    render() {
        return (
            <Grid stackable>

                <Grid.Row>
                    <Grid.Column width={15}>
                        <div className="transactions">
                            <h3 className="transactions__title"> Transactions </h3>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                                voluptua. At vero eos et accusam et justo duo
                            </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={15}>
                        <Grid stackable>
                            <Segment style={segmentStyle}>
                                <span style={{ fontSize: '17px', fontWeight: 500 }}> No orders available </span> 
                            </Segment> 
                        </Grid>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default connect(TransactionContainer.mapStateToProps)(TransactionContainer)

{/* <TransactionBlock 
date="29/02/18" 
transactionId="#125asddf78954asr7854789zt45"
type="Payments"
amount="500,00"
amountDevise="eur" />

<TransactionBlock
date="29/02/18" 
transactionId="#125asddf78954asr7854789zt45"
type="Payments received"
amount="152,20"
amountDevise="eur" /> */}