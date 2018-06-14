import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, Image } from 'semantic-ui-react'



import Transacion from './transactions'
import QuickOverview from './dashboard/quickOverview'
import DashNavigation from './dashboard/dashNavi'
import Loader from '@reusable/Loader'



const Dashcontent = (props) => {

    return props.loading ?  (
        <div className="dashcontent">
            <DashNavigation/>           
            <Loader />
        </div>
    ) : (
        <div className="dashcontent">
            <DashNavigation/>           
            { props.children }
        </div>
    ) 
 
};

export default Dashcontent;


