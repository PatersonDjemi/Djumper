import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Grid centered stackable columns="sixteen">
                <Grid.Column computer={6} tablet={12}>
                    <div className="footer__copyright">
                        Djumper 2018. All rights reserved
                    </div>
                </Grid.Column>
                <Grid.Column computer={6} tablet={12}>
                    <div className="footer_links">
                        <ul className="links">
                            <li> <Link to="/"><span>Home</span></Link>  </li>
                            <li> <Link to="/faq"><span>FAQ</span></Link> </li>
                        </ul>
                    </div>
                </Grid.Column>
            </Grid>
        </Container> 
    );
}

export default Footer;