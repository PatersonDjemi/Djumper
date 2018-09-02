import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'

import plus from '@assets/lnr-plus-circle.svg'
import confirm from '@assets/lnr-checkmark-circle.svg'
import account from '@assets/account.svg'
import transactions from '@assets/euro.svg'
import artciles from '@assets/price-tag.svg'
import sendmoney from '@assets/send-money.svg'
import checkbank from '@assets/check.svg'
import finduser from '@assets/collaboration.svg'
import settings from '@assets/settings.svg'
import help from '@assets/info.svg'



const sideMenuList = [
    { taskname: 'account',  icons: account, link: 'account' },
    { taskname: 'articles',  icons: artciles, link: 'articles' },
    { taskname: 'money',  icons: sendmoney, link: 'money' },
    { taskname: 'transactions',  icons: transactions, link: 'transactions' },
    // { taskname: 'create check',  icons: checkbank, link: 'createcheck' },
    { taskname: 'find user',  icons: finduser, link: 'finduser' },
    { taskname: 'settings',  icons: settings, link: 'settings' },
    { taskname: 'help',  icons: help, link: 'help' },
];

const SingleTask = (props) => {
    return (
        <NavLink to={props.link} activeClassName="test">
            <li className="single__menu">
                <Image src={props.icons} className="imgplus" height="25" width="25" />
                <span className="menu__name">{props.taskname}</span>
            </li>
        </NavLink>
    )
};


class Dashmenu extends Component {
    constructor(props) {
        super(props);
    }

    // rendering the side menu of dashboard
    renderSideMenu() {
        const { path } = this.props.match;
        return sideMenuList.map( (item, index) => {
            return <SingleTask taskname={item.taskname} icons={item.icons}
                               link={`${path}/${item.link}`} key={index} /> 
        });
    }

    render() {
        return (
            <div className="dashboard__menu__container">
                <div className="dashboard__menu">
                    <Header as="h1" className="dashboard__logo">
                        <Link to="/"> DJUMPER </Link>
                    </Header>
                    <div className="dashboard__menu_user">
                        <ul className="dashboard__menu_list">
                            { this.renderSideMenu() }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashmenu;

// a revoir: 
// comment extraire la nvaigation de telle facon que tout ne re-rendern pas entièrement
// essayer d utiliser match.url à la place de match.path
// revoir encore les liens qd ils sont actifs et ont le focus en meme tps le border devient plus gros, ce qui faut eviter