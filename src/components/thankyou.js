import React from 'react';
import {Container, Grid } from 'semantic-ui-react';
import Footer from './footer/footer';

const Thanks = (props) => {
    return (
        <div className="thanks">
            <Container fluid>
                <Grid stackable centered>
                    <Grid.Column computer={16}>
                        <div className="thankyou__text">
                            <h4 className="thankyou__text_title">
                                Please confirm your email adress
                            </h4>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={5}>
                        <div className="thankyou__text_explain">
                            After confirming your email adress you can start enjoying 
                            djumper and use all its features 
                        </div>
                    </Grid.Column>                
                </Grid>
            </Container>

            <div className="thanks__footer">
                <Footer />
            </div>

        </div>
    );
}


export default Thanks;