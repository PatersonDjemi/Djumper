import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Grid } from 'semantic-ui-react';

import wallet from '../../../assets/wallet.svg'
import transfer from '../../../assets/transfer-money.svg'
import request from '../../../assets/get-money.svg'



const Overview = (props) => {
    return (
        <div className="box__banner">
            <div className="box__text">
                <div className="box__banner_title">
                    <span className="bg_title"> {props.mainTitle} </span> <br/>
                    <span className="sm_title">{props.secondTitle}</span>
                </div>
                <div className="box__amount">
                    <span className="sum"> {props.amount} </span>
                    <span className="devise__overview" style={{marginRight: 0}}> {props.devise} </span>                    
                </div>
            </div>
            <div className="box__img">
                <Image src={props.src} height="60" width="60" className="iconsboxes" />
            </div>
        </div>
    );
}


const QuickOverview = ({ theItems }) => {

    if ( !theItems ) {
        return null;
    }

    // eviter de faire les calculations ici. voir ce qui peut etre sauvergardé ds la base de donnée.
    let amounts = theItems.reduce((acc, currentValue) => {
        return parseFloat(acc) + parseFloat(currentValue.amount)
    }, 0);

    let nextPayment = theItems.reduce((acc, currentValue) => {
        return parseFloat(acc) + (parseFloat(currentValue.amount) / parseFloat(currentValue.nberOfMonth));
    }, 0)

    let lastPayment = 0;

    return (
        <Container fluid>
            <Grid stackable centered>
                <Grid.Column width={15}>
                    <section>   
                        <div className="quick_overview">
                            Quick Overview
                        </div>

                        <div className="overview">
                            <Overview
                                mainTitle="Total Balance"
                                secondTitle="montant disponible"
                                amount={amounts}
                                devise="EUR"
                                src={wallet} />
                            <Overview
                                mainTitle="Last Payment"
                                secondTitle="am 10.12.2018"
                                amount={lastPayment}
                                devise="EUR"
                                src={request} />
                            <Overview
                                mainTitle="Next Payment"
                                secondTitle="am 10.08.2018"
                                amount={nextPayment}
                                devise="EUR"
                                src={transfer} />
                        </div>

                    </section>  
                </Grid.Column>
            </Grid>    
        </Container>    

    )

};

export default QuickOverview;