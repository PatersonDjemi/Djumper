import React from 'react';
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


const QuickOverview = (props) => {
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
                                amount="10 000"
                                devise="USD"
                                src={wallet} />
                            <Overview
                                mainTitle="Last Request"
                                secondTitle="am 10.12.2018"
                                amount="1 038"
                                devise="USD"
                                src={request} />
                            <Overview
                                mainTitle="Next Request"
                                secondTitle="am 10.08.2018"
                                amount="3 038"
                                devise="USD"
                                src={transfer} />
                        </div>
            </section>  
                </Grid.Column>
            </Grid>

        </Container>


    )
};

export default QuickOverview;