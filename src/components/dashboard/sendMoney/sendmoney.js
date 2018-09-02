import React, { Component } from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';

import Layout from '../withSideBarLayout'
import Calendar from '@assets/Calendar.svg'

import {Description} from './moneyDescription';
import MoneyForm from './moneyForm';

class Money extends Component {

    render() {
        return (
            <div>

                <Description /> 

                <Layout.LayoutWithSideBar>

                    <Layout.MainContent>

                        <MoneyForm />          

                    </Layout.MainContent>

                    <Layout.Sidebar>

                        side
                    </Layout.Sidebar>     

                </Layout.LayoutWithSideBar>
            </div>   
        )
    }

}

export default Money;


{/* <div className="transfert__block__content">

<div className="test__block__input">
    <div className="test__input__holder">
        <label htmlFor="" className="transfert__email"> Enter an email </label>
        <input type="text" placeholder="Enter an email" id="email__input" />
    </div>
</div>
<div className="transfert__to__block" >
    <div className="transfert__test__to">
        <span> to : </span>
    </div>
    <div className="transfert__to__name">
        <span className="text__to__name"> Paterson H </span>
        <span className="text__to__name"> Paterson H </span>
        <span className="text__to__name"> Paterson H</span>
    </div>
</div>
<div className="transfert__summe">
    <span className="how__much">How much do you want to send ? </span>
    <div className="inputs__summes">
        <div className="whatISend">
            <label style={{ marginBottom: .5 + 'rem', display: 'inline-block'}}> Send </label>
            <input type="text" placeholder="10,00" className="input__money" />
            <span className="transfert__device"> eur </span>
        </div>
        <div className="whatYouReceive">
            <label  style={{ marginBottom: .5 + 'rem', display: 'inline-block'}}> Receive </label>
            <input type="text" placeholder="10,00" className="input__money" />
            <span className="transfert__device"> eur </span>
        </div>
    </div>
</div>
<div className="conversion__rate">
    <span> Conversion rate </span> <br/>
    <span> 1 EUR </span> = <span> 1,000 EUR </span>
</div>
<div className="transfert__note"> 
    <label htmlFor="" className="add__note__text"> add a note : </label>
    <textarea rows="3" value="say something here" className="transfert__add__note" />
</div>
<div className="transfert__btn__block">
    <span className="tranfert__btn btn__cancel "> cancel </span>
    <span className="tranfert__btn btn__next "> next </span>
</div>

</div> */}