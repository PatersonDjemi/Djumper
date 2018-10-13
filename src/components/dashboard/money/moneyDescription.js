import React from 'react';
import { Link } from 'react-router-dom';
import  GridColumn, { GridRow, Container, Grid, Image } from 'semantic-ui-react';

import DescriptionRoute from './descriptionsRoutes';

import wallet from '@assets/wallet.svg'
import transfer from '@assets/transfer-money.svg'
import request from '@assets/get-money.svg'


const IconMenu = (props) => (
    <Link to={props.to} className="icon__menu__link">
        <div className="icon__menu">
            <div className="round__image__wrapper">
                <Image src={props.src} height="50" width="50" />
            </div>
            <span style={{ display: 'inline-block', marginTop: 1 + 'rem'}}> {props.texts} </span>
        </div>    
    </Link>
);

let Description = (props) => {
    return (
        <Container fluid>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div className="sendmoney__descrition" >
                            <Container className="sendmoney__wrapper">

                                <DescriptionRoute match={props.match} />

                                <div className="icon__menu__wrapper">
                                    <IconMenu to={`${props.match.url}/sendmoney`} src={transfer} texts="Send money" />
                                    <IconMenu to={`${props.match.url}/requestmoney`} src={wallet} texts="Request money" />
                                    <IconMenu to={`${props.match.url}/createcheck`} src={request} texts="Create checks" />
                                </div>
                                
                            </Container>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    )
}

 export default Description;