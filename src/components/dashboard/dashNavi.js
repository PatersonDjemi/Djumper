import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'


import notif from '../../../assets/bell.svg'
import message from '../../../assets/message.svg'


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
        <div className="header__search">
            <input type="searchbar" id="mysearchbar" placeholder="Search..." />
        </div>
    );
}


const DashNavi = (props) => {
    return (
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
    )
}


export default DashNavi;