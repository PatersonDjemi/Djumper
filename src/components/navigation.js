import React from 'react';

import { Grid, Header, Menu, Button, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Navigation = () => {
    return (
            <Grid.Column width={16}>
                <div className="_topNav">
                    <div className="_logo">
                        <Header as="h3" size="huge">DJUMPER</Header>
                    </div>
                    <div className="_menuNav">
                        <Link to="" className="_faqLink"> FAQ </Link>
                        <Link to=""> <Button className="_logIn" size="large"> Log In </Button> </Link>
                    </div>
                </div>
            </Grid.Column>
    );
}


export default Navigation;

