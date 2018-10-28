import React, { Component } from 'react';


const DropDownComponent = (props) => (
    <div className="component__dropdown" style={{ top: props.top +'rem', right: props.right +'rem' }}>
        {props.children}
    </div>
)

export default DropDownComponent;