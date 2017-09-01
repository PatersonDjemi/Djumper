import React from 'react';
import ReactDom from 'react-dom';

import '../semantic/src/semantic.less'
import '../styles/style.css'

import App from './components/app';


ReactDom.render(
    <App/>,
    document.getElementById('root')
);