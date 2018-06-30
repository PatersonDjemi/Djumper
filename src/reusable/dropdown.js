import React, { Component } from 'react';


class DropDownComponent extends Component {
    render() {
        return (
        <div className="component__dropdown" style={{ top: this.props.top +'rem', right: this.props.right +'rem' }}>
            {this.props.children}
        </div>
        )
    }
}

export default DropDownComponent;