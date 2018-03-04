import React, { Component } from 'react';
import {Form, Input, Checkbox, Message, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class FormInput extends Component {

    render () {
        const {url, className, type, placeholder} = this.props;

        return (
            <div className={className} style={{backgroundImage: `url(${url})` }} >
                <input type={type} 
                    className="login__input" 
                    placeholder={placeholder} />
                <div className="feeback"> error email not valid</div>
            </div>
        );
    }
}

export class CheckInput extends Component {
    render () {
        return (
                <label className="checkboxs">
                        {this.props.text}
                    <input type="checkbox" id="agree__check"/>
                    <span className="check_box"></span>
                </label>                              
        );
    }
}