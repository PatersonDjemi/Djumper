import React, {Component} from 'react';


export function InputWithPassword(MyComponent) {

    return class extends Component {
            constructor(props) {
                super(props);

                this.state= {
                    icon: true,
                    show: 'false'
                }
            }

            showHide() {
                this.setState({ show: hide })
            }

            render() {
                return (
                    <MyComponent show={this.state.show} icon={this.state.icon} showHide={this.showHide} {...this.props} />
                );
            }
    }

}



export class FormInputs extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {url, className, type, placeholder, inputStyle } = this.props;
        // const {input, error, hasError } = this.props;

        { this.props.show ? (console.log('hallllllllllllllllo')) : null }

        return (
            <div className={className} >
                <input type={type} 
                    className={inputStyle} 
                    placeholder={placeholder} /> 
                {/* {hasError ? (<div className="feeback"> {error} </div>) : <div className="space"></div>} */}
            </div>
        );
    }
}