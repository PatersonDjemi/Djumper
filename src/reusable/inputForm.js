// import from libraries
import React, {Component} from 'react';
import {Form, Input, Checkbox, Message, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types'


// local import image
import Check from '../../assets/tick.svg';
import Show from '../../assets/eye-outline.svg';
import Hide from '../../assets/not-visible-interface-symbol-of-an-eye-with-a-slash-on-it.svg';



//mes Inputs
export const MyInput = ({HtmlFor, Label, Type, Placeholder, Inputs, HasError, Error, labelClass}) => {
    return (
        <Form.Field width={16} className="_feld">
            <label htmlFor={HtmlFor} className={labelClass}>{ Label }</label>
            <input id={HtmlFor} type={Type} placeholder={Placeholder} {...Inputs} className="_input"/>
            {HasError && <div className="_formError">{Error}</div>}
        </Form.Field>
    );
}


export class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            type: "password"
        };

        this.renderOnVisibility = this.renderOnVisibility.bind(this);
    }

    changeVisibility() {
        if (this.state.type === "password") {
            this.setState({type: 'text', visibility: true});
        } else {
            this.setState({type: 'password', visibility: false});
        }
    }

    renderOnVisibility() {

        const {visibility} = this.state;

        if (visibility) {

            return (
                <div className="view" onClick={this.changeVisibility.bind(this)}>
                    <Image src={Hide} width={25} height={25}  />
                </div>
            );
        }

        return (
            <div className="view" onClick={this.changeVisibility.bind(this)}>
                <Image src={Show} width={25} height={25} />
            </div>
        );
    }


    render() {
        return (
            <Form.Field width={16} className="_feld" >

                <label htmlFor={this.props.HtmlFor} className={this.props.labelClass}>{ this.props.Label }</label>

                <div className="inputIcon">

                    <input id={this.props.HtmlFor} type={this.state.type} placeholder={this.props.Placeholder} {...this.props.Inputs}  className="_input"/>

                    { this.renderOnVisibility() }

                </div>

                {this.props.HasError && <div className="_formError">{this.props.Error}</div>}

            </Form.Field>
        );
    }
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