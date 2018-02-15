import React from 'react';
import PropTypes from 'prop-types';

const _divButton = {};


export const MyButton = (props) => {
    return (
        <div className="_yet" >
            <span className="_Texts">{props.Text}</span>
        </div>
    );
}


MyButton.PropTypes = {
    Text: PropTypes.string
}