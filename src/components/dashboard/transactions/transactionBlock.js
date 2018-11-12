import React from "react";
import  {GridRow, Container, Grid, Image } from 'semantic-ui-react';

const TransactionBlock = (props) => {
    return (
        <Grid.Row celled='true' className="transactions__block">
            <Grid.Column width={3} className="mois__date">
                <div className="transactions__block_title"> Date </div>
                <div className="transactions__data"> { props.date }</div>
            </Grid.Column>
            <Grid.Column width={6}>
                <div className="transactions__block_title"> Transaction Id </div>
                <div className="transactions__data"> { props.transactionId } </div>
            </Grid.Column>
            <Grid.Column width={4}>
                <div className="transactions__block_title"> Transaction type </div>
                <div className="transactions__data"> { props.type } </div>
            </Grid.Column>
            <Grid.Column width={3}>
                <div className="transactions__block_title"> Amount </div>
                <div className="transactions__data"> <span> {props.amount} </span> <span> { props.amountDevise } </span> </div>
            </Grid.Column>
        </Grid.Row>
    );
}

export default TransactionBlock;