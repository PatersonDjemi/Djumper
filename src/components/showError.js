import React from 'react';
import { Image, Header} from 'semantic-ui-react'


const ShowError = (props) => {
    return (
        <div className="error__box" style={{ position: 'absolute' , bottom: props.Bottom + 'px', left: props.Left +'%' }}>
            <div className="error__header">
                <span className="error__title"> error </span>
            </div>
            <div className="error_body">
                <ul className="error__list">
                    <li className="single__error">Le Lorem Ipsum est simplement du faux texte employé dans la composition et laIpsum es </li>
                    <li className="single__error">Le Lorem Ipsum est simplement du faux texte employé dans la composition et laIpsum es </li>
                    <li className="single__error">Le Lorem Ipsum est simplement du faux texte employé dans la composition et laIpsum es </li>
                    <li className="single__error">Le Lorem Ipsum est simplement du faux texte employé dans la composition et laIpsum es </li>
                </ul>
            </div>
        </div>
    );
}


export default ShowError;