import React from 'react';
import { Grid, Header, Menu, Button, Container} from 'semantic-ui-react'

import Navigation from './navigation';
import FirstBlock from './first_block'



const H_First = () => {
    return (
        <Container fluid className="container__top">
            <Grid>
                <Navigation/>
                <FirstBlock/>
            </Grid>
        </Container>
    );
}


export default H_First;