import React from 'react';
import {GridRow, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const NewItems = (props) => {
    return(
        <Link to="/" className="newItems__link">
            <Container fluid className="newItems__parent" > 
                <div className="newItems__profil">
                    <div className="newItems__tof">
                        hallo euch
                    </div>
                </div>
                <div className="newItems__infos">
                    <div className="newItems__seller">
                        <span> Lufthansa DE </span>
                        
                    </div>
                    <div className="newItems__prices"></div>
                    <div className="newItems__stats"></div>
                </div>
            </Container>
        </Link>
    );
}

export default NewItems;