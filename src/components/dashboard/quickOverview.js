import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Grid } from 'semantic-ui-react';

import wallet from '../../../assets/wallet.svg'
import transfer from '../../../assets/transfer-money.svg'
import request from '../../../assets/get-money.svg'

import { fetchArticles } from '../../actions'


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


class QuickOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    static mapStateToProps(state) {
        return {

        };
    }

    componentDidMount() {
        // action for fetching data from the server
        this.props.fetchArticles()
    }

    render() {
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
                                    devise="EUR"
                                    src={wallet} />
                                <Overview
                                    mainTitle="Last Request"
                                    secondTitle="am 10.12.2018"
                                    amount="1 038"
                                    devise="EUR"
                                    src={request} />
                                <Overview
                                    mainTitle="Next Request"
                                    secondTitle="am 10.08.2018"
                                    amount="3 038"
                                    devise="EUR"
                                    src={transfer} />
                            </div>

                        </section>  
                    </Grid.Column>
                </Grid>    
            </Container>    
    
        )
    }
};

export default connect(QuickOverview.mapStateToProps, { fetchArticles })(QuickOverview);