import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Grid, Header, Image, Button } from 'semantic-ui-react'


import plane from '@assets/aeroplane.svg'

import { Products } from './dashboard/articles'




class Resume extends Component {

    static mapStateToProps(state) {
        return {
            items: state.articlesReducer
        }
    }

    renderProductsReview() {

    const { articles } = this.props.items;

    if ( articles ) {
        return articles.map(article => {
            return <Products
                mois="Avr"
                date="29/18" 
                src={plane}
                receiver={article.seller}
                type='Transport'
                amountDevise={article.devise}
                amount={article.amount}
                instalment={`${article.nberOfMonth} months`}
                status={article.status}
                key={article._id}
                percentage="50"                                        
                color="#2196F3" 
             />
        })
    }

    return null;

    }

    render() {
        console.log('these items ', this.props.items)
        return (
            <Container fluid >
                <Grid stackable >
                    <Grid.Column width={14}>
    
                        <div className="last__transactions" style={{ position: 'relative'}}>
                           <Header as="h3" content="Products reviews" className="last__activities__title" />
                            <div className="last__activities__description">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                            </div>
                            <span className=" view_all"> View all </span>
                        </div>
                        <Grid stackable centered className="main__transaction" >
                            { this.renderProductsReview() }
                        </Grid>
    
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }

}

//TODO trouver ou afficher la liste des differents comptes connectes à djumper
//<Header as="h3" content="My accounts (a trouver l endroit ou afficher ca)" className="addCardtitle" />

export default connect(Resume.mapStateToProps)(Resume);






// const Inputs = (props) => {
//     return (
//         <div className="group_input">
//             <label className="label_card">{props.label}</label>
//             <input className="input_card" type="text" />
//             <span className="error_card" style={{color: 'red'}}>for error</span>
//         </div>
//     );
// }


// const Activity = (props) => {
//     return (
//         <div className="block__activity" style={{position: 'relative'}}>
//             <div className="activity__title"> {props.title} </div>
//             <div className="activity__description"> {props.text} </div>
//             <span className="activity__time"> {props.time} </span>
//             <div className="activity__categorie" style={{ backgroundColor: `${props.color}`}}></div>
//         </div>
//     );
// }


// const AddCardForm = () => { /* formulaire pour pouvoir relier une carte à notre compte */
//     return (
//         <Grid stackable centered >
//             <Grid.Column width={12} className="adds noPTB">
//                 <Grid stackable centered >
//                     <Grid.Column width={6} style={{ backgroundColor: 'lightblue', position: 'relative'}} >
//                         <div className="card_type"> maestro card </div>
//                         <div style={{marginTop: 12}} >
//                             <Image src={credit} width="500" height="250" />
//                         </div>
//                         <div className="bank_name">Deutsche Bank</div>
//                     </Grid.Column>
//                     <Grid.Column width={10}>
//                         <Grid stackable >
//                             <Grid.Column width={8}>
//                                 <Inputs label="First name" />
//                             </Grid.Column>
//                             <Grid.Column width={8}>
//                                 <Inputs label="Last name" />
//                             </Grid.Column>
//                             <Grid.Column width={8}>
//                                 <Inputs label="Card number" />
//                             </Grid.Column>
//                             <Grid.Column width={8}>
//                                 <Inputs label="Bankleitzahl" />
//                             </Grid.Column>
//                             <Grid.Column width={5}>
//                                 <Inputs label="Expire" />
//                             </Grid.Column>
//                         </Grid>
//                         <div className="steps">
//                             <span className="addwzIban">Add with IBAN</span>
//                             <Button size="big" className="next_step">Next Step</Button>
//                         </div>
//                     </Grid.Column>
//                 </Grid>
//             </Grid.Column>
//         </Grid>
//     );
// }
