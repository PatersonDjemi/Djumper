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

const H_Third = () => {
    return (
        <Container fluid className="why_use">
            <Grid centered stackable columns="sixteen">
                <Grid.Column computer={7} tablet={12}>

                    <div className="why_use__reasons">
                        <h2 className="why_use__titre"> why to use djumper </h2>

                        <Reasons ClassName="why_use_reasons__one"
                                reason="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua"/>

                        <Reasons ClassName="why_use_reasons__two"
                                reason="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua"/>

                        <Reasons ClassName="why_use_reasons__three"
                                reason="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua"/>

                    </div>

                    <Link to="/sign_in" id="free_account" className="link_btn link_btn--orange"> creata a free account </Link>

                </Grid.Column>
                <Grid.Column computer={7} tablet={12}>

                    <div className="symboles">

                        <div className="symbole__one">
                            <Image src={Trust} height={70} width={70}  />
                            <span className="caracteristics">trust</span>
                        </div>
                        <div className="symbole__two">
                            <Image src={Smart} height={70} width={70}  />
                            <span className="caracteristics">smart</span>
                        </div>
                        <div className="symbole__three">
                            <Image src={Plan} height={70} width={70} />
                            <span className="caracteristics">plan</span>
                        </div>
                        <div className="symbole__four">
                            <Image src={Easy} height={70} width={70}  />
                            <span className="caracteristics">flexibelity</span>
                        </div>
                    </div>

                </Grid.Column>
            </Grid>
    </Container>
    );
}

export default H_Third;
