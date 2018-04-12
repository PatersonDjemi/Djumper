import React, { Component } from 'react';
import Flag, { Form, Input, Checkbox, Message, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusState:  false,
            blurState: false
        }

        this.inputFocus = this.inputFocus.bind(this);
        this.renderTheBorder = this.renderTheBorder.bind(this);
        this.inputBlur = this.inputBlur.bind(this)
    }

    inputFocus() {
        this.setState({
            focusState: true,
            blurState: false
        })
    }

    inputBlur() {
        console.log(this.props.hasError)
        console.log(this.props.error)
        if(this.props.hasError !== 'undefined') {
            return this.setState({
                focusState: false,
                blurState: true
            })
        }
    }

    renderTheBorder() {
        if (!this.state.focusState && !this.state.blurState)  {
            return <div className={`input__state `}></div>
        }
        else if ( this.state.focusState && !this.state.blurState ){
            return <div className={`input__state state__focus `}></div>
        }
        else if (!this.state.focusState && this.state.blurState) {
            return <div className={`input__state state__leaveRigth `}></div>
        }
    }

    render () {
        const {url, className, type, placeholder, inputStyle } = this.props;
        const {input, error, hasError } = this.props;

        console.log('hasError: ', hasError)
        return (
            <div className={className} style={{backgroundImage: `url(${url})` }} >
                <input type={type} 
                    className={inputStyle} 
                    placeholder={placeholder}
                    {...input} 
                    onFocus={this.inputFocus}
                    onBlur={this.inputBlur} />
                    <div className="initial__state">
                        {this.renderTheBorder()}
                    </div>
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