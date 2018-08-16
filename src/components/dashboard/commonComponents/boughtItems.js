import React from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import info from '@assets/info.svg'

export const Article = (props) => {
    const { month, day, seller, type,
        amount, rate, status, devise,
        percentage, color, page, id } = props;

    return (
        <Link to={`/dashboard/${page}/${id}`} className="articles__link">
            <Container fluid className="artcicle__wrapper">
                <div className="articles__profil celled">
                    <Image src={info} height="40" width="40" />
                </div>
                <div className="artciles__date celled">
                    <div className="date__month">{ month }</div>
                    <div className="date__day">{ day }</div>
                </div>
                <div className="article__name celled"> 
                    <div className="name__seller">{ seller }</div>
                    <div className="article__type"> categorie { type } </div>
                </div>
                <div className="artciles__price celled"> 
                    <div className="price__amount"> { amount } { devise } </div>
                    <div className="rate__duration"> in { rate } </div>
                </div>
                <div className="artcile__state celled"> 
                    <div className="rate__state">
                        <span style={{float: 'left'}}> { status } </span>
                        <span style={{float: 'right'}}> { `${percentage}%` }  </span>
                      </div>
                    <div className="progress">
                        <div className="progress__bar" style={{ width: `${percentage}%`, backgroundColor: `${color}` }}></div>
                    </div>
                </div>
            </Container>
        </Link>
    )
}