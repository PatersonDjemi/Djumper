import React, { Component } from 'react';
import {Form, Input, Checkbox, Message, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class FormInput extends Component {

    render () {
        const {url, className, type, placeholder } = this.props;
        const {input, error, hasError } = this.props;

        return (
            <div className={className} style={{backgroundImage: `url(${url})` }} >
                <input type={type} 
                    className="login__input" 
                    placeholder={placeholder}
                    {...input} />
                {hasError ? (<div className="feeback"> {error} </div>) : <div className="space"></div>}
            </div>
        );
    }
}

export class CheckInput extends Component {
    render () {
        const {input, text, hasError, error} = this.props;
        return (
            <div>
                <label className="checkboxs">
                        {text}
                    <input type="checkbox" id="agree__check" {...input} />
                    <span className="check_box"></span>
                </label>                              
                {hasError ? (<div className="feeback__checkbox"> {error} </div>) : <div className="space"></div>}
            </div>

        );
    }
}