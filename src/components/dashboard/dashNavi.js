import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react'


import notif from '../../../assets/bell.svg'
import message from '../../../assets/message.svg'

import DropDownComponent from '../../reusable/dropdown'
import { logUserOut } from '../../actions/index'


const MenuItem = (props) => {
    return (
        <li className="nav__menu__list">
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


class DashNavi extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dropdownProfil: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.callLogOut = this.callLogOut.bind(this);

        this.checkons = this.checkons.bind(this);
    }

    toggleDropdown(event) {
        event.stopPropagation();
        console.log('this is my event', event.target);
        if ( this.state.dropdownProfil ) {
            return this.setState({dropdownProfil:false});
        }
        return this.setState({dropdownProfil: true});
    }

    checkons(event) {
        event.stopPropagation();
        console.log('event', e.target);
        console.log('event', e.target.parentNode);
    }

    callLogOut() {
        //pass the history here as an argument
        this.props.logUserOut(history)
    }

    render() {
        return (
            <Container fluid  className="dashboard__nav">
                <Grid stackable centered className="grid__nav">
                    <Grid.Column width={7} >
                        <Searchbar/>
                    </Grid.Column>
                    <Grid.Column width={8} >
                        <nav className="headmenu">
                            <ul className="nav__menu">
                                <MenuItem src={message} nber="5" />
                                <MenuItem src={notif} nber="3" />
                                <li className="nav__menu__list">
                                    <div className="profil"
                                        onClick={this.toggleDropdown}>
                                        <div className="profil__pic">
                                        </div>
                                        { this.state.dropdownProfil && 
                                           ( <DropDownComponent Top={'5'} Right={'-5'}>
                                                <ul className="profil__menu">
                                                    <li onClick={this.checkons} className="profil__menu__list"> Menu 1 </li>
                                                    <li className="profil__menu__list"> Menu 2 </li>
                                                    <li className="profil__menu__list"> Deconnexion </li>
                                                </ul>
                                            </DropDownComponent> )
                                        }
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}


export default connect(null, { logUserOut })(DashNavi);