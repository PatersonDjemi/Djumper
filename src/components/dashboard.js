import React from 'react';
import {Container, Grid, Header, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

import user from '../../assets/lnr-user.svg'
import Dashmenu from './dashmenu'
import Dashcontent from './dashcontent'


const Dashboard = () => {
    return (
        <div className="dashboard">
            <Dashmenu/>
            <Dashcontent/>
        </div>

    );
};

export default Dashboard;
