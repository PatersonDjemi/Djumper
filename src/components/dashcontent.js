import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, Image } from 'semantic-ui-react'

import AddCard from './add-card';
import Transacion from './transactions'


import wallet from '../../assets/wallet.svg'
import transfer from '../../assets/transfer-money.svg'
import request from '../../assets/get-money.svg'

import notif from '../../assets/bell.svg'
import message from '../../assets/message.svg'


const MenuItem = (props) => {
    return (
        <li>
            <div className="menu__block">
                <div className="menu__block_icons">
                    <Image src={props.src} height="25" width="25" /> 
                </div>
                <span className="menu__block_nber"> {props.nber} </span>
            </div>
        </li>
    );
}

const Searchbar = () => {
    return (
        // <div className="headsearchs">
            <div className="header__search">
                <input type="searchbar" id="mysearchbar" placeholder="Search..." />
            </div>
        // </div>
    );
}

const Boxone = (props) => {
    return (
        <div className="bannerBox1">
            <Image src={props.src} height="60" width="60" className="iconsboxes" />
            <div className="textboxes">
                <div className="saldo">
                   <span style={{fontSize: 25, fontWeight: 500}}> {props.titre} </span> <br/>
                   <span style={{fontSize: 12, fontWeight: 100}}>{props.textSecondaire}</span>
                </div>
                <div className="amount">
                    <span> {props.montant}</span>
                    <span style={{marginLeft: 11}}>{props.monaie}</span>
                </div>
            </div>
        </div>
    );
}

const Quicktask = (props) => {
    return (
        <div className="bannerbox2">
            <div className="titreicons">
                {props.titre}
            </div>
            <Button>{props.taskbutton}</Button>
        </div>
    );
}

const Banner = () => {
    return (
        <Container fluid className="mybanner">
            <Grid centered stackable >
                <Grid.Column width={5} >
                    <div>
                        <Boxone titre="Total Balance"
                                textSecondaire="montant disponible"
                                monaie="€"
                                montant=" 1.000.000,00"
                                src={wallet} />
                    </div>
                </Grid.Column>
                <Grid.Column width={5} >
                    <div>
                        <Boxone titre="Last Request"
                                textSecondaire="from Anderson stephanie"
                                monaie="€"
                                montant=" 100.000,00"
                                src={request} />
                    </div>
                </Grid.Column>
                <Grid.Column width={5} >
                    <div>
                        <Boxone titre="Last Transfer"
                                textSecondaire="to Wallas wilson"
                                monaie="€"
                                montant=" 1.000,00"
                                src={transfer} />
                    </div>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

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
                    <span style={{marginLeft: 0}}> {props.devise} </span>
                </div>
            </div>
            <div className="box__img">
                <Image src={props.src} height="60" width="60" className="iconsboxes" />
            </div>
        </div>
    );
}

const mgTop = 35;

const Dashcontent = () => {
    return (
        <div className="dashcontent">
            <Container fluid  className="dashboard__nav">
                <Grid centered className="grid__nav">
                    <Grid.Column width={8} >
                        <Searchbar/>
                    </Grid.Column>
                    <Grid.Column width={8} >
                        <nav className="headmenu">
                            <ul className="nav__menu">
                                <MenuItem src={message} nber="5" />
                                <MenuItem src={notif} nber="3" />
                                <li>
                                    <div className="profil">
                                        <div className="profil__pic">
                                        </div>
                                    </div>
                                </li>
                                {/* <MenuItem title="help" />
                                <MenuItem title="profil" /> */}
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid>
            </Container>

            <section>   
                <div className="quick_overview">
                    Quick Overview
                </div>

                <div className="overview">
                    <Overview
                        mainTitle="Total Balance"
                        secondTitle="montant disponible"
                        amount="10.000"
                        devise="$"
                        src={wallet} />
                    <Overview
                        mainTitle="Last Request"
                        secondTitle="am 10.12.2018"
                        amount="1.038"
                        devise="$"
                        src={request} />
                    <Overview
                        mainTitle="Last Transfert"
                        secondTitle="am 10.08.2018"
                        amount="3.038"
                        devise="$"
                        src={transfer} />
                </div>
            </section>


            {/* <Banner/> */}


            <AddCard/>

        </div>
    );
};

export default Dashcontent;

