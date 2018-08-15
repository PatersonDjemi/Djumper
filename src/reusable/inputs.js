import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react'

import eyeHide  from '../../assets/eye-outline.svg'
import eyeShow from '../../assets/not-visible.svg'


const IconPassword = (props) => {
    return (
        <div className="imagePassword" onClick={props.showOrHide}>
            <Image width="25" heigth="25" src={props.src} />
        </div>
    )
}


export class FormInput extends Component {

    render () {
        const {url, className, type, placeholder, iconPassword } = this.props;
        const {input, error, hasError } = this.props;

        return (
            <div className={className} style={{backgroundImage: `url(${url})` }} >
                <input type={type} 
                    className='login__input' 
                    placeholder={placeholder}
                    {...input} /> 

                {hasError ? (<div className="feeback"> {error} </div>) : <div className="space"></div>}
            </div>
        );
    }
}


export class FormInputPassword extends Component {
    constructor(props) {
        super(props);

        this.state= {
            show: false,
            type: 'password'
        }

        this.showOrHide = this.showOrHide.bind(this);
    }

    showOrHide(e) {
        e.stopPropagation();

        if ( !this.state.show ) {
           return this.setState({ show: true, type: 'text'})
        }

        return this.setState({show: false, type: 'password'})
    }


    render () {

        const {url, className, type, placeholder, iconPassword } = this.props;
        const {input, error, hasError } = this.props;

        const mysrc = this.state.show ? eyeShow : eyeHide ;

        return (
            <div className={className} style={{backgroundImage: `url(${url})` }} >
                <input type={this.state.type} 
                    className='login__input' 
                    placeholder={placeholder}
                    {...input} /> 
                
                <IconPassword src={mysrc} showOrHide={this.showOrHide}/>

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





// TDOD render les couleurs des borders des input en fontion de l erreur
// Props type aussi à definir



// export class FormInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             focusState:  false,
//             blurState: false
//         }

//         this.inputFocus = this.inputFocus.bind(this);
//         this.renderTheBorder = this.renderTheBorder.bind(this);
//         this.inputBlur = this.inputBlur.bind(this)
//     }

//     inputFocus() {
//         this.setState({
//             focusState: true,
//             blurState: false
//         })
//     }

//     inputBlur() {
//         console.log(this.props.hasError)
//         console.log(this.props.error)
//         if(this.props.hasError !== 'undefined') {
//             return this.setState({
//                 focusState: false,
//                 blurState: true
//             })
//         }
//     }

//     renderTheBorder() {
//         if (!this.state.focusState && !this.state.blurState)  {
//             return <div className={`input__state `}></div>
//         }
//         else if ( this.state.focusState && !this.state.blurState ){
//             return <div className={`input__state state__focus `}></div>
//         }
//         else if (!this.state.focusState && this.state.blurState) {
//             return <div className={`input__state state__leaveRigth `}></div>
//         }
//     }

//     render () {
//         const {url, className, type, placeholder, inputStyle } = this.props;
//         const {input, error, hasError } = this.props;

//         console.log('hasError: ', hasError)
//         return (
//             <div className={className} style={{backgroundImage: `url(${url})` }} >
//                 <input type={type} 
//                     className={inputStyle} 
//                     placeholder={placeholder}
//                     {...input} 
//                     onFocus={this.inputFocus}
//                     onBlur={this.inputBlur} />
//                     <div className="initial__state">
//                         {this.renderTheBorder()}
//                     </div>
//                 {hasError ? (<div className="feeback"> {error} </div>) : <div className="space"></div>}
//             </div>
//         );
//     }
// }