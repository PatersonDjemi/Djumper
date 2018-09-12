import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react'


import notif from '@assets/bell.svg'
import message from '@assets/message.svg'
import profil from '@assets/User.svg'
import search from '@assets/search.svg'

import DropDownComponent from '@reusable/dropdown'
import Loader from '@reusable/Loader'
import {ModalBox} from '@reusable/modal'

import NotifAndMsg from '@containers/notifAndMsg'

import { logUserOut } from '@actions/index'

import MenuNav from './menuNav'


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
            dropdownProfil: false,
            showLoader: false,
            showNotifAndMsg: false,
        }

        this.dropDownRef = React.createRef();

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.callLogOut = this.callLogOut.bind(this);
        this.documentCloseDropdown = this.documentCloseDropdown.bind(this);
        this.renderDropdowMenuUser = this.renderDropdowMenuUser.bind(this);
        this.hideNotifAndMsg = this.hideNotifAndMsg.bind(this);

    }

    toggleDropdown(event) {
        event.stopPropagation();
        if ( this.state.dropdownProfil ) {
            document.removeEventListener('click', this.documentCloseDropdown);
            return this.setState({dropdownProfil:false});
        }
        document.addEventListener('click', this.documentCloseDropdown);
        return this.setState({dropdownProfil: true});
    }

    documentCloseDropdown(event) {
        if (!this.dropDownRef.current.contains(event.target)) {
            document.removeEventListener('click', this.documentCloseDropdown);
            this.setState({dropdownProfil: false});
        }
    }

    hideNotifAndMsg() {
        this.setState({showNotifAndMsg: false});
    }

    renderDropdowMenuUser() {
        return (
            <DropDownComponent top={'1.5'} right={'-5'}>
                <ul className="profil__menu" ref={this.dropDownRef}>
                    <div className="greeting__user">Hi Paterson </div>
                    <li className="profil__menu__list"> Edit profil </li>
                    <li className="profil__menu__list"> Invite friend </li>
                    <li onClick={() => console.log('test click')} className="profil__menu__list"> Config account </li>
                    <li onClick={this.callLogOut} className="profil__menu__list"> Deconnexion </li>
                </ul>
            </DropDownComponent>
        )
    };

    renderNotifcationAndMessage() {
        return <NotifAndMsg hideNotifAndMsg={this.hideNotifAndMsg} />;
    }

    callLogOut(event) {
        event.stopPropagation();
        this.props.logUserOut(this.props.history);
        this.setState({showLoader: true});
    }
    
    render() {
        return (

            <Container fluid  className="dashboard__nav">
                <Grid stackable centered className="grid__nav">

                    { this.state.showLoader && <Loader /> }

                    { this.state.showNotifAndMsg && this.renderNotifcationAndMessage()  }

                    <Grid.Column width={7} >
                        <Searchbar/>
                    </Grid.Column>

                    <Grid.Column width={8} >
                        <nav className="headmenu">
                            <ul className="nav__menu">
                                <MenuNav 
                                    actionClick={() => console.log('search clicked')}
                                    src={search} />
                                <MenuNav actionClick={() => this.setState({showNotifAndMsg: true})}
                                    src={notif}
                                    nber="3" />
                                <MenuNav actionClick={this.toggleDropdown} 
                                    src={profil} />
                            </ul>
                            <div style={{ display: 'flex', flexDirection: 'row-reverse', position: 'relative'}}>
                                { this.state.dropdownProfil && this.renderDropdowMenuUser() }
                            </div>
                        </nav>
                    </Grid.Column>

                    </Grid>
            </Container>
        )
    }

}


export default connect(null, {logUserOut})(DashNavi);