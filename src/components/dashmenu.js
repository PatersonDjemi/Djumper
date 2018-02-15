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
            <li className="task">
                <Image src={props.icons} className="imgplus" height="25" width="25" />
                <span className="taskname_">{props.taskname}</span>
            </li>
        </Link>
    )
};

const MenuTask = () => {
    return (
        <ul className="taskslist">
            <SingleTask taskname="My account" icons={account} />
            <SingleTask taskname="Transactions" icons={transactions} />
            <SingleTask taskname="Articles" icons={artciles} />
            <SingleTask taskname="Send money" icons={sendmoney} />
            <SingleTask taskname="Create a check" icons={checkbank} />
            <SingleTask taskname="Find user" icons={finduser} />
            <SingleTask taskname="Setting" icons={settings} />
            <SingleTask taskname="Help" icons={help} />
        </ul>
    );
}

const Dashmenu = () => {
    return (

        <div className="dashmenu">
            <Header as="h2" textAlign="center" className="dashlogo" content="DJUMPER" />
            <div className="userinfo">
                <span id="greeting">Hello again !</span><br/>
                <span id="username">Hassan Paterson</span><br/>
                <Image src={confirm} className="confimedaccount" /><span id="confirmed">confirmed</span>

            </div>
            <div className="usertasks">
                <MenuTask/>
            </div>
        </div>
    );
};

export default Dashmenu;