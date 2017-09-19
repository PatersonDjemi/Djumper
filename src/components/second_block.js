import React from 'react'
import { Grid, Container, Button, Header } from 'semantic-ui-react'

import CardBlock from './card_block'

const SecondBlock = () => {
    return (
        <Container fluid className="_secondBlock _noPadding">
            <Grid centered stackable>
                <Grid.Column width={16}>
                    <Header as="h1" className="titre_2" textAlign="center"> HOW TO USE IT </Header>
                </Grid.Column>

                <Grid centered stackable>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_createAcc">
                            <CardBlock
                                classes="_myCard _createAcc"
                                nber="1"
                                title="Create your account"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices de texte"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_confirmAcc">
                            <CardBlock
                                nber="2"
                                title="Confirm your account"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices de texte"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_enjoyAcc">
                            <CardBlock
                                nber="3"
                                title="Enjoy djumper"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices de texte"
                            />
                        </div>
                    </Grid.Column >
                </Grid>
            </Grid>

            <div className="_separationTwo"></div>
        </Container>
    );
}

export default SecondBlock;