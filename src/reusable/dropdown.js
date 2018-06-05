import React, { Component } from 'react';


class DropDownComponent extends Component {
    render() {
        return (
        <div className="component__dropdown" style={{ top: `${this.props.Top} rem`, right:`${this.props.Right} rem`}}>
            {this.props.children}
        </div>
        )
    }
}

export default DropDownComponent;