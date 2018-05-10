import React from 'react'
import { Container, Grid, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const H_Sixth = () => {
    return (
        <Container fluid className="get_started">
            <Grid centered columns="twelve">
                <Grid.Column width={12} textAlign="center">
                    <Header as="h2" textAlign="center" className="get_started__title"> it´s simple - start now and enjoy paying your trip </Header>
                    <Link to="/signup"  className="border_btn"> start now </Link>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default H_Sixth;