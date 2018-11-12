import React from "react";
import propTypes from "prop-types"
import  { Image } from 'semantic-ui-react';

export const FilterButton = (props) => {
    return (
        <div className="filter__btn"> 
           { props.imgs ? <Image src={props.src} className="filter__icons" height="20" width="20" /> : null } 
            <span className="filter__name"> {props.name} </span>
        </div>        
    )
}

FilterButton.defaultProps = {
    imgs: null
};

FilterButton.propTypes = {
    name: propTypes.string.isRequired,
    src: propTypes.string
    // imgs: propTypes., à voir plus tard
};

