import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react'


import notif from '@assets/bell.svg'
import message from '@assets/message.svg'

import DropDownComponent from '@reusable/dropdown'
import Loader from '@reusable/Loader'
import {ModalBox} from '@reusable/modal'

import { logUserOut } from '@actions/index'


const MenuItem = (props) => {
    return (
        <li className="nav__menu__list">
            <div className="menu__block">
                <div onClick={props.renderBlock} className="menu__block_icons">
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
            dropdownProfil: false,
            showLoader: false,
            showNotifAndMsg: false,
        }

        this.dropDownRef = React.createRef();

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.callLogOut = this.callLogOut.bind(this);
        this.documentCloseDropdown = this.documentCloseDropdown.bind(this);
        this.renderDropdowMenuUser = this.renderDropdowMenuUser.bind(this);
        this.modalBoxClose = this.modalBoxClose.bind(this);
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

    modalBoxClose(event) {
        event.stopPropagation();
        if (event.target.id === 'modal_div') {
           return this.setState({showNotifAndMsg: false});
        }
    }


    renderNotifcationAndMessage() {
        return (
            <ModalBox closeModalBox={this.modalBoxClose}>
                <div className="notif__msg">
                    All your news here
                </div>
            </ModalBox>
        );
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
                                {/* <MenuItem src={message} nber="5" /> */}
                                <MenuItem renderBlock={() => this.setState({showNotifAndMsg: true})} src={notif} nber="3" />
                                <li className="nav__menu__list" >
                                    <div className="profil">
                                        <div className="profil__pic"
                                         onClick={this.toggleDropdown}></div>
                                    </div>
                                </li>
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