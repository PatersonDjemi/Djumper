import React from 'react'
import { Container, Grid, Header, Button } from 'semantic-ui-react'


const H_Fifth = () => {
    return (
        <Container fluid className="_fifthBlock" textAlign="center">
            <Grid centered columns="twelve">
                <Grid.Column width={12} textAlign="center">
                    <Header as="h2" textAlign="center" className="_simpl"> IT'S SIMPLE - CREATE AN ACCOUNT AND ENJOY PAYING YOUR TRIP</Header>
                        <Button className="_getStarted" size="huge"> GET STARTED </Button>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default H_Fifth;