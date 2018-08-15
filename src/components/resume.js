import React, { Component } from 'react';
import {Container, Grid, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import plane from '@assets/aeroplane.svg'

import { Article } from './dashboard/articles'


function renderProductsReview(theItems) {
    if ( theItems ) {
        return theItems.map(article => {
            return <Article
                    page='articles'
                    id={article._id}
                    month="Avr"
                    day="29/18" 
                    seller={article.seller}
                    type='Transport'
                    devise={article.devise}
                    amount={article.amount}
                    rate={`${article.nberOfMonth} months`}
                    status={article.status}
                    key={article._id}
                    percentage="50"                                        
                    color="#2196F3" 
                />  
        })
    }
    return null;
}


const Resume = ({ theItems }) => {

    return (           
        <Grid stackable >
            <Grid.Column width={14}>
                <Grid stackable>
                    <Grid.Row columns={2} style={{ marginBottom: '5rem' }}>
                        <Grid.Column width={16}>
                           <Header as="h3" content="Statistiks" className="statistik__header" />
                           <div className="statistik__description">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                            </div>
                        </Grid.Column>
                        <Grid.Column className="">
                            <Segment className="statistik__left">
                                <span style={{ fontSize: '17px', fontWeight: 500 }}> Statistik left </span> 
                            </Segment>  
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className="statistik__right">
                                <span style={{ fontSize: '17px', fontWeight: 500 }}> Statistik right </span>
                            </Segment>  
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>

                <Grid.Row columns={1}>
                    <Grid.Column> 
                        <div className="last__transactions" style={{ position: 'relative'}}>
                            <Header as="h3" content="Products reviews" className="last__activities__title" />
                            <div className="last__activities__description">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr 
                            </div>
                            <Link to="/dashboard/articles"> <Button primary content="View all" size="big" className="btn__view_all"></Button> </Link>
                            {/* <span className=" view_all"> View all </span> */}
                        </div>
                        
                        { renderProductsReview(theItems) }
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    );
}

//TODO trouver ou afficher la liste des differents comptes connectes à djumper

export default Resume;
