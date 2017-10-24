import React from 'react'
import { Container, Grid, Header, Button, List } from 'semantic-ui-react'


const H_Third = () => {
    return (
        <Container fluid className="_thirdBlock">
            <Grid centered stackable columns="sixteen">
                <Grid.Column computer={7} tablet={12}>
                    <Header as="h2" className="_titreWhy"> WHY TO USE DJUMPER</Header>
                    <List className="_listW">
                        <List.Item>Le Lorem Ipsum est simplement du faux texte employé dans la </List.Item>
                        <List.Item>Le Lorem Ipsum est simplement du faux texte employé dans la </List.Item>
                        <List.Item>Le Lorem Ipsum est simplement du faux texte employé dans la </List.Item>
                        <List.Item>Le Lorem Ipsum est simplement du faux texte employé dans la </List.Item>
                    </List>
                    <Button primary className="_newAccs" size="big">New account for free </Button>
                </Grid.Column>
                <Grid.Column computer={5} tablet={12}></Grid.Column>
            </Grid>
    </Container>
    );
}

export default H_Third;
