import React from 'react'
import { Grid, Container, Button, Header } from 'semantic-ui-react'

import CardBlock from './card_block'
import CreateAccont from '../../assets/avatar.svg';
import Confirm from '../../assets/confirm.svg';
import Enjoy from '../../assets/flight.svg';


const H_Second = () => {
    return (
        <Container fluid className="how_work _noPadding">
            <Container fluid className="how_work_block">

                <h2 className="how_work-header">how it works</h2>

                <Grid centered stackable>
                    <Grid.Column tablet={7} computer={5}>
                        <div className="create_account how_work__card">
                            <CardBlock
                                classes="_myCard _createAcc"
                                nber="1"
                                src={CreateAccont}
                                title="create account"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                mise en page avant impression. Le Lorem Ipsum est"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={5}>
                        <div className="confirm_account how_work__card">
                            <CardBlock
                                nber="2"
                                src={Confirm}
                                title="confirm it"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                mise en page avant impression. Le Lorem Ipsum est"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column tablet={7} computer={5}>
                        <div className="enjoy_djumper how_work__card">
                            <CardBlock
                                nber="3"
                                src={Enjoy}
                                title="enjoy djumper"
                                text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                mise en page avant impression. Le Lorem Ipsum est"
                            />
                        </div>
                    </Grid.Column >
                </Grid>

            </Container>
        </Container>
    );
}

export default H_Second;