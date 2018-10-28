import React, { Component } from 'react';

import { Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <Grid.Column width={16}>

            <div className="navigation">
                <div className="navigation__logo">
                        <Link to="/"> djumper </Link>
                </div>
                <div className="navigation__menu">
                    <Link to="/faq" className="_faqLink"> faq </Link>
                    <Link to="/login" className="link_btn link_btn--color " > log in </Link>
                </div>
            </div>

        </Grid.Column>
    );
}



export default Navigation;


