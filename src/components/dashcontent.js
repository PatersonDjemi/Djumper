import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Grid, Button, Image } from 'semantic-ui-react'

import DashNavigation from './dashboard/navigation/dashNavi'
import Loader from '@reusable/Loader'



const Dashcontent = (props) => {
    return ( 
        <div className="dashcontent">
            <Route path={'/dashboard'} component={DashNavigation} />
            { props.loading ? <Loader /> : props.children   }                    
        </div>
    );
};

export default Dashcontent;

// render nav component with a router
