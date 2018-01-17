import React, { Component } from 'react';

import { Grid, Header, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <Grid.Column width={16}>

            <div className="_topNav">
                <div className="_logo">
                    <Header as="h3" size="huge">
                        <Link to="/"> DJUMPER </Link>
                    </Header>
                </div>
                <div className="_menuNav">
                    <Link to="/faq" className="_faqLink"> FAQ </Link>
                    <Link to="/login"><Button className="_logIn" size="large"> Log In </Button></Link>
                </div>
            </div>

        </Grid.Column>
    );
}


export default Navigation;

