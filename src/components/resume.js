import React from 'react';
import {Container, Grid, Header, Image, Button } from 'semantic-ui-react'

import bank from '../../assets/bank.svg'
import credit from '../../assets/credit-card.svg'
import paypal from '../../assets/paypal.svg'
import plane from '../../assets/aeroplane.svg'
import shirt from '../../assets/shirt.svg'

import { Products } from './dashboard/articles'





const Inputs = (props) => {
    return (
        <div className="group_input">
            <label className="label_card">{props.label}</label>
            <input className="input_card" type="text" />
            <span className="error_card" style={{color: 'red'}}>for error</span>
        </div>
    );
}

const AddCardForm = () => { /* formulaire pour pouvoir relier une carte à notre compte */
    return (
        <Grid stackable centered >
            <Grid.Column width={12} className="adds noPTB">
                <Grid stackable centered >
                    <Grid.Column width={6} style={{ backgroundColor: 'lightblue', position: 'relative'}} >
                        <div className="card_type"> maestro card </div>
                        <div style={{marginTop: 12}} >
                            <Image src={credit} width="500" height="250" />
                        </div>
                        <div className="bank_name">Deutsche Bank</div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Grid stackable >
                            <Grid.Column width={8}>
                                <Inputs label="First name" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Inputs label="Last name" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Inputs label="Card number" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Inputs label="Bankleitzahl" />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Inputs label="Expire" />
                            </Grid.Column>
                        </Grid>
                        <div className="steps">
                            <span className="addwzIban">Add with IBAN</span>
                            <Button size="big" className="next_step">Next Step</Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

const Activity = (props) => {
    return (
        <div className="block__activity" style={{position: 'relative'}}>
            <div className="activity__title"> {props.title} </div>
            <div className="activity__description"> {props.text} </div>
            <span className="activity__time"> {props.time} </span>
            <div className="activity__categorie" style={{ backgroundColor: `${props.color}`}}></div>
        </div>
    );
}

const Resume = (props) => {
    return (
        <Container fluid >
            <Grid stackable >
                <Grid.Column width={14}>
                    {/* <div className="last__activities" style={{ position: 'relative'}}>
                       <Header as="h3" content="Last activities" className="last__activities__title" />
                        <div className="last__activities__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                        </div>
                        <span className="get_start view_all"> View all </span>
                    </div>
                    <Grid stackable centered className="main__" >
                        <Grid.Column width={16}>
                            <Activity title="First activity"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                                time="about 3h ago"
                                color="#00BCD4" />
                            <Activity title="Second activity"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                                time="about 3h ago"
                                color='#2196F3' />
                            <Activity title="Third activity"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                                time="about 3h ago"
                                color='#E91E63' />
                        </Grid.Column>
                    </Grid> */}

                    <div className="last__transactions" style={{ position: 'relative'}}>
                       <Header as="h3" content="Products reviews" className="last__activities__title" />
                        <div className="last__activities__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                        </div>
                        <span className=" view_all"> View all </span>
                    </div>
                    <Grid stackable centered className="main__transaction" >
                                    <Products mois="Avr"
                                        date="29/18" 
                                        src={plane}
                                        receiver="Lufthansa"
                                        type="Transport"
                                        amountDevise="$"
                                        amount="500.00"                                        
                                        instalment="5 months"
                                        status="not completed" 
                                        percentage="50"                                        
                                        color="#2196F3" />
                                    <Products mois="Jan"
                                        date="11/18" 
                                        src={shirt}
                                        receiver="Puma"
                                        type="Clothes"
                                        amountDevise="$"
                                        amount="100.00"
                                        instalment="2 months"
                                        status="not completed"
                                        percentage="75"
                                        color="#2196F3" />
                {/* les transactions d envois d argents n ont pas de periode time */}
                                    <Products mois="Dec"
                                        date="15/18" 
                                        src={plane}
                                        receiver="Djumper AG"
                                        type="Transport"
                                        amountDevise="$"
                                        amount="75.00"
                                        instalment="7 months"
                                        status="not completed"
                                        percentage="25"
                                        color="#2196F3" />
                                    <Products mois="Sept"
                                        date="30/18" 
                                        src={shirt}
                                        receiver="Adidas"
                                        type="Clothes"
                                        amountDevise="$"
                                        amount="375.00"
                                        instalment="1 month"
                                        status="completd"
                                        percentage="100"                                        
                                        color="#00BCD4" />
                    </Grid>

                    {/* <AddCardForm /> */}

                </Grid.Column>

            </Grid>
        </Container>
    );
}

//TODO trouver ou afficher la liste des differents comptes connectes à djumper
//<Header as="h3" content="My accounts (a trouver l endroit ou afficher ca)" className="addCardtitle" />

export default Resume;




