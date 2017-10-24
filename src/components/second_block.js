import React from 'react'
import { Grid, Container, Button, Header } from 'semantic-ui-react'

import CardBlock from './card_block'
import CreateAccont from '../../assets/avatar.svg';
import Confirm from '../../assets/confirm.svg';
import Enjoy from '../../assets/flight.svg';


const H_Second = () => {
    return (
        <Container fluid className="_secondBlock _noPadding">
            <Grid centered stackable>
                <Grid.Column width={16}>
                    <Header as="h1" className="titre_2" textAlign="center"> HOW IT WORKS </Header>
                </Grid.Column>

                <Grid centered stackable>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_createAcc">
                            <CardBlock
                                classes="_myCard _createAcc"
                                nber="1"
                                src={CreateAccont}
                                title="Create Your Account"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_confirmAcc">
                            <CardBlock
                                nber="2"
                                src={Confirm}
                                title="Confirm Your Account"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={4}>
                        <div className="_enjoyAcc">
                            <CardBlock
                                nber="3"
                                src={Enjoy}
                                title="Enjoy Djumper"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                        mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                        0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                        pour réaliser un livre spécimen de polices"
                            />
                        </div>
                    </Grid.Column >
                </Grid>
            </Grid>

            <div className="_separationTwo"></div>
        </Container>
    );
}

export default H_Second;