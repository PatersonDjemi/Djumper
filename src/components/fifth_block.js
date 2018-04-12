import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Trust from '../../assets/hand-shake.svg';
import Smart from '../../assets/bulb.svg';
import Plan from '../../assets/planning.svg';
import Easy from '../../assets/solution.svg';

const Reasons = (props) => {
    return (
    <div className={props.ClassName}>
        {props.reason}
    </div>   
    );
}

const H_Fifth = () => {
    return (
        <Container fluid className="keep_tracking">
            <Grid centered stackable columns="sixteen">
                <Grid.Column computer={8} tablet={12}>

                    <div className="keep_tracking__devices">
                        <div className="device_types">
                        </div>
                    </div>

                </Grid.Column>

                <Grid.Column computer={7} tablet={12}>

                    <div className="keep_tracking__infos">
                        <h2 className="keep_tracking__titre">  
                            <span>keep tracking your</span> <br/> 
                            <span>payements</span>
                         </h2>

                        <Reasons ClassName="why_use_reasons__one"
                                reason="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua"/>

                        <Reasons ClassName="why_use_reasons__two"
                                reason="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua"/>


                           <Link to="/signup" id="create_account" className="link_to_btn"> creata a free account </Link>     
                    </div>

                    

                </Grid.Column>

            </Grid>
    </Container>
    );
}

export default H_Fifth;


// TODO le component reason existe dja ailleurs. L importer et non le recreer une 
// une autre fois