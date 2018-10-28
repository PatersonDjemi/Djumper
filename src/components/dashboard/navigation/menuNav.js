import React from 'react';
import { Image } from 'semantic-ui-react'

let IconMenu = (props) => {
    return (
        <li className="nav__menu__list">
            <div className="menu__block">
                <div onClick={props.actionClick} className="menu__block_icons">
                    <Image src={props.src} height="25" width="25" /> 
                </div>
                { props.nber !== 0 ? <span className="menu__block_nber"> {props.nber} </span> : null }   
            </div>
        </li>
    );
}

IconMenu.defaultProps = {
    nber: 0
}

export default IconMenu;
