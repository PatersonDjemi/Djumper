import React from 'react'
import { Grid, Header, Button, Container } from 'semantic-ui-react'


const FirstBlock = () => {
    return (
        <Grid.Column width={16} className="_firstBlock">
            <div className="_mainFunc">
                <Header as="h1">PAYE TON VOYAGE EN PLUSIEURS MENSUALITES</Header>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu
                </p>
                <Button>CREATE AN ACCOUNT</Button>

            </div>

            <div className="_separationOne"></div>
        </Grid.Column>
    );
}

export default FirstBlock;

/*
<div className="_blockCard">
    <Header as='h1' className="_titre">PAYE TON VOYAGE EN PLUSIEURS MENSUALITES</Header>
    <p className="_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu
    </p>
    <Button primary> CREATE AN ACCOUNT </Button>
</div>
*/