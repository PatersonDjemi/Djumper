import React from 'react';
import PropType from "prop-types";

const ShowError = (props) => {
    return (
        <div className="error__box" style={{ position: 'absolute' , bottom: props.bottom + 'px', left: props.left +'%' }}>
            <div className="error__header">
                <span className="error__title"> error </span>
            </div>
            <div className="error_body">
                <ul className="error__list">
                    <li className="single__error"> {props.textError} </li>
                </ul>
            </div>
        </div>
    );
}

ShowError.PropType = {
    bottom: PropType.number.isRequired,
    left: PropType.number.isRequired,
    textError: PropType.string.isRequired
}

export default ShowError;