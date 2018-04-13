import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'

import plus from '../../assets/lnr-plus-circle.svg'
import confirm from '../../assets/lnr-checkmark-circle.svg'
import account from '../../assets/account.svg'
import transactions from '../../assets/euro.svg'
import artciles from '../../assets/price-tag.svg'
import sendmoney from '../../assets/send-money.svg'
import checkbank from '../../assets/check.svg'
import finduser from '../../assets/collaboration.svg'
import settings from '../../assets/settings.svg'
import help from '../../assets/info.svg'

const SingleTask = (props) => {
    return (
        <Link to="">
            <li className="single__menu">
                <Image src={props.icons} className="imgplus" height="25" width="25" />
                <span className="menu__name">{props.taskname}</span>
            </li>
        </Link>
    )
};

const MenuTask = () => {
    return (
        <ul className="dashboard__menu_list">
            <SingleTask taskname="account" icons={account} />
            <SingleTask taskname="transactions" icons={transactions} />
            <SingleTask taskname="articles" icons={artciles} />
            <SingleTask taskname="send money" icons={sendmoney} />
            <SingleTask taskname="create a check" icons={checkbank} />
            <SingleTask taskname="find user" icons={finduser} />
            <SingleTask taskname="setting" icons={settings} />
            <SingleTask taskname="help" icons={help} />
        </ul>
    );
}

const Dashmenu = () => {
    return (

        <div className="dashboard__menu">
            <Header as="h1" className="dashboard__logo" content="DJUMPER" />
            {/* <div className="userinfo">
                <span id="greeting">Hello again !</span><br/>
                <span id="username">Hassan Paterson</span><br/>
                <Image src={confirm} className="confimedaccount" /><span id="confirmed">confirmed</span>

            </div> */}
            <div className="dashboard__menu_user">
                <MenuTask/>
            </div>
        </div>
    );
};

export default Dashmenu;