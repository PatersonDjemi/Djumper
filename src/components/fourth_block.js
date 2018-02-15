import React from 'react'
import { Container, Grid, Header, Button } from 'semantic-ui-react'


const H_Fourth = () => {
    return (
        <Container fluid className="_fourthBlock">
            <Grid stackable centered columns="twelve">
                <Grid.Column width={12}>
                    <Header as="h2" textAlign="center" className="_nverMiss"> NEVER MISS AN OFFER FOR YOUR TRIP</Header>
                </Grid.Column>
                <Grid.Column computer={8} tablet={10}>
                    <p className="_textAf">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices de texte
                    </p>
                </Grid.Column>
            </Grid>
            <div className="_myCont"></div>
        </Container>
    );
}

export default H_Fourth;