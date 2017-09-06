import React from 'react';
import { Grid, Header, Menu, Button, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <Grid Container className="_topNav padded">
            <Grid.Column width={5} className="left floated" >
                <Header as="h2" className="_logo">DJUMPER</Header>
            </Grid.Column>

            <Grid.Column width={5} className="right floated">
                <Menu secondary className="_smallNav">
                    <Menu.Item name="FAQ"/>
                    <Menu.Item>
                        <Button primary>Login</Button>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
        </Grid>
    );
}


export default Navigation;