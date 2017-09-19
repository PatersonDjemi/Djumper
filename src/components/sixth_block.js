import React from 'react'
import { Container, Grid, Header, Button } from 'semantic-ui-react'


const SixthBlock = () => {
    return (
        <Container fluid className="_sixthBlock">
            <Grid centered stackable >
                <Grid.Column width={6}>
                    <div className="_phone">

                    </div>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header as="h2" className="_your _titre"> YOUR TICKET IN YOUR HAND </Header>
                    <p className="_text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre
                    </p>
                </Grid.Column>

            </Grid>

        </Container>
    );
}

export default SixthBlock;