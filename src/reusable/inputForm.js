// import from libraries
import React, {Component} from 'react';
import {Form, Input, Checkbox, Message, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types'


// local import image
import Check from '../../assets/tick.svg';

//mes Inputs
export const MyInput = ({HtmlFor, Label, Type, Placeholder, Inputs, HasError, Error}) => {
    return (
        <Form.Field width={16} className="_feld">
            <label htmlFor={HtmlFor}>{ Label }</label>
            <input id={HtmlFor} type={Type} placeholder={Placeholder} {...Inputs} className="_input"/>
            {HasError && <div className="_formError">{Error}</div>}
        </Form.Field>
    );
}

export const MyCheckBox = ({icons_,ForLabel, Label, Inputs, HasError, Error }) => {

        return (
            <Form.Field className="_myCheckbox" >
                <div className="_checkons">
                    { icons_ && <Image src={Check} size='mini' /> }
                </div>
                <label htmlFor={ForLabel} className="_labelo" >{Label}
                    <input id={ForLabel} type="checkbox" {...Inputs} />
                </label>


                {HasError && <div className="_formError">{Error}</div>}
            </Form.Field>
        );

}



MyCheckBox.PropTypes = {
    ForLabel:PropTypes.string,
    Label: PropTypes.string
    // HasError
    //Error
    //Inputs
}

MyInput.PropTypes = {
    HtmlFor: PropTypes.string,
    Label: PropTypes.string,
    Type: PropTypes.string,
    Placeholder: PropTypes.string,
    HasError: PropTypes.bool,
    Error: PropTypes.string
    // Inputs
}