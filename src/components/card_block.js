import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Button, Image } from 'semantic-ui-react'


const CardBlock = (props) => {
    return (
        <div className="card_home">

          <div className="card_home__nber">{props.nber}</div>
          <div className="card_home__content">
              <Image src={props.src} width={60} height={60} className="card_home_content__image" />
              <header as="h3" className="card_home_content__titre">{props.title}</header>
              <div className="card_home_content__text">{props.text}</div>
           </div>
        </div>
    );
}


export default CardBlock;



CardBlock.PropTypes = {
    nber: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string
}