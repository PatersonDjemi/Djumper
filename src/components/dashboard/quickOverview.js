import React from 'react';
import { Image } from 'semantic-ui-react';

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
                    <span style={{marginRight: 0}}> {props.devise} </span>
                    <span className="sum"> {props.amount} </span>
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
        <section>   
            <div className="quick_overview">
                Quick Overview
            </div>

            <div className="overview">
                <Overview
                    mainTitle="Total Balance"
                    secondTitle="montant disponible"
                    amount="10 000"
                    devise="$"
                    src={wallet} />
                <Overview
                    mainTitle="Last Request"
                    secondTitle="am 10.12.2018"
                    amount="1 038"
                    devise="$"
                    src={request} />
                <Overview
                    mainTitle="Next Request"
                    secondTitle="am 10.08.2018"
                    amount="3 038"
                    devise="$"
                    src={transfer} />
            </div>
        </section>

    )
};

export default QuickOverview;