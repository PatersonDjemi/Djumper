import React from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';


export const Description = () => {
    return (
        <Container fluid>
            <Grid stackable centered >
                <Grid.Column >
                    <div className="sendmoney__descrition" >
                        <h3 className="sendMoney__title">
                            Send, Request Money, Create a check
                        </h3>  
                        <div className="sendmoney__description-text">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                            voluptua. At vero eos et accusam et justo duo
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </Container>

    )
}