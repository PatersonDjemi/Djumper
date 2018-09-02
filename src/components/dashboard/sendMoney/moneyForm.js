import React, {Component} from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';

import MoneyPanel from './transfertPanel';
import MoneyContent from './moneyContent';


const MoneyMenu = () => {
    return (
        <Grid.Column width={4}>
                
            <ul className="money__options">
                <li className="money__options__tab"> Send money </li>
                <li className="money__options__tab"> Request money </li>
                <li className="money__options__tab"> Create check </li>
            </ul>

        </Grid.Column>
    );
}



class MoneyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Grid stackable columns={16} >
    
                <MoneyMenu />
    
                <MoneyContent />    
    
            </Grid>
    
        );
    }
}

export default MoneyForm;


{/* <div className="transfert__block__content">

<div className="test__block__input">

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

</div> 
</div> */}