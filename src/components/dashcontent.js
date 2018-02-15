import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, Image } from 'semantic-ui-react'

import AddCard from './add-card';
import Transacion from './transactions'


import wallet from '../../assets/wallet.svg'
import transfer from '../../assets/transfer-money.svg'
import request from '../../assets/get-money.svg'

const MenuItem = (props) => {
    return (
        <li>
            <div>
                <Link to="">
                    <div className="menuname">
                        <span>{props.title}</span>
                    </div>
                </Link>
            </div>
        </li>
    );
}

const Searchbar = () => {
    return(
        <div className="headsearch">
            <div className="searchdiv">
                <input type="searchbar" id="mysearchbar" placeholder="search" />
            </div>
        </div>
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
            <Grid centered stackable  style={{backgroundColor: 'lightBlue' }} >
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

const mgTop = 35;

const Dashcontent = () => {
    return (
        <div className="dashcontent">
            <Container fluid  className="dashcontentheader">
                <Grid centered className="gridnav">
                    <Grid.Column width={8} >
                        <Searchbar/>
                    </Grid.Column>
                    <Grid.Column width={8} >
                        <nav className="headmenu">
                            <ul className="navimenu">
                                <MenuItem title="message" />
                                <MenuItem title="notification" />
                                <MenuItem title="help" />
                                <MenuItem title="profil" />
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid>
            </Container>

            <Banner/>


            <AddCard/>

        </div>
    );
};

export default Dashcontent;

/*
presentation de la page d accueil au niveau de account
const Dashcontent = () => {
    return (
        <div className="dashcontent">
            <Container fluid  className="dashcontentheader">
                <Grid centered className="gridnav">
                    <Grid.Column width={8} >
                        <Searchbar/>
                    </Grid.Column>
                    <Grid.Column width={8} >
                        <nav className="headmenu">
                            <ul className="navimenu">
                                <MenuItem title="message" />
                                <MenuItem title="notification" />
                                <MenuItem title="help" />
                                <MenuItem title="profil" />
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid>
            </Container>

            <Banner/>

            <AddCard/>

        </div>
    );
};
*/