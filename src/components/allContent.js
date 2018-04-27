import React from 'react';
import {Container, Grid, Header, Image, Button } from 'semantic-ui-react'

import bank from '../../assets/bank.svg'
import credit from '../../assets/credit-card.svg'
import paypal from '../../assets/paypal.svg'



const CardBox = (props) => {
    return (
        <div className="cardbank">
            <div className="entete-card">
                <div className="entete-text">
                    <span>{props.card}</span>
                    <div className="linkbank">{props.title}</div>
                </div>
                <div className="entete-img">
                    <Image src={props.src} height="55" width="55" className="imgbank" />
                </div>
            </div>
            <div className="body-card">
                {props.bodyText}
            </div>
            <div className="footer-card">
                <Button>{props.action}</Button>
            </div>
        </div>
    );
}

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

const AddCard = (props) => {
    return (
        <Container fluid >
            <Grid stackable >
                <Grid.Column width={15}>
                    <div className="last__activities" style={{ position: 'relative'}}>
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
                    </Grid>

                    <div className="last__transactions" style={{ position: 'relative'}}>
                       <Header as="h3" content="Last transactions" className="last__activities__title" />
                        <div className="last__activities__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                        </div>
                        <span className="get_start view_all"> View all </span>
                    </div>
                </Grid.Column>

            </Grid>
        </Container>
    );
}

//TODO trouver ou afficher la liste des differents comptes connectes à djumper
//<Header as="h3" content="My accounts (a trouver l endroit ou afficher ca)" className="addCardtitle" />

export default AddCard;




{/* <Grid stackable centered className="cardBox" >
<Grid.Column width={16}>
    <CardBox card="Bank card"
             title="Link a bank account"
             src={bank}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a bank account" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Credit card"
             title="Link a credit card"
             src={credit}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a credit card" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Paypal account"
             title="Link a paypal account"
             src={paypal}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a paypal account" />
</Grid.Column> */}