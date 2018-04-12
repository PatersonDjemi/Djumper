import React from 'react'
import { Grid, Header, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const FirstBlock = () => {

    return (

        <Grid.Column width={16}>

            <div className="djumper">
                <div id="djumper__card">

                    <Header as="h1" className="djumper__header">paye ton voyage en plusieurs mensualité</Header>
                    <p id="djumper__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu
                    </p>
                  <Link to="/sign_in" id="djumper__create_account" className="link_btn link_btn--orange"> create an account </Link>

                </div>
            </div>

            {/*<div className="_separationOne">*/}
                {/*<div className="_circle1"></div>*/}
                {/*<div className="_circle2"></div>*/}
                {/*<div className="_circle3"></div>*/}
            {/*</div>*/}

        </Grid.Column>
    );
}

export default FirstBlock;
