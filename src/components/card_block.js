import React from 'react'
import { Container, Grid, Button, Image } from 'semantic-ui-react'


const CardBlock = (props) => {
    return (
        <div className="_myCard">
            <div className="_centerNber">
                <div className="_myNber"><span>{props.nber}</span></div>
            </div>
            <div className="_card">
                <Image/>
                <header as="h3" className="_titleCard">{props.title}</header>
                <p className="_textCard">{props.text}</p>
            </div>
        </div>

    );
}

export default CardBlock;