import React from 'react';

import { Grid, Header, Menu, Button, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import FirstBlock from './first_block'



const Navigation = () => {
    return (
        <Container fluid className="_topContainer">
            <Grid>
                <Grid.Column width={16}>
                    <div className="_topNav">
                        <div className="_logo">
                            <Header as="h3">DJUMPER</Header>
                        </div>
                        <div className="_menu">
                            <a className="_faqLink"> FAQ </a>
                            <Button className="_logIn"> Log In </Button>
                        </div>
                    </div>
                </Grid.Column>

                <FirstBlock/>
            </Grid>
        </Container>







    );
}


export default Navigation;