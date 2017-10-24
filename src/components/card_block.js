import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Button, Image } from 'semantic-ui-react'


const CardBlock = (props) => {
    return (
        <div className="_AllCard">
            <div className="_cardNber">
                <div className="_myNber"><span>{props.nber}</span></div>
            </div>
            <div className="_card">
                <header as="h3" className="_cardTitle">{props.title}</header>
                <Image src={props.src} width={70} height={70} className="_cardImage" />
                <p className="_cardText">{props.text}</p>
            </div>
        </div>

    );
}


export default CardBlock;



CardBlock.PropTypes = {
    nber: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string
    // src
}