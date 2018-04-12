import React from 'react'
import { Container, Grid, Header, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import Navigation from './navigation'
import Footer from './footer'

import Down from '../../assets/lnr-chevron-down.svg'


const Titre = (props) => {
    return (
        <Header as="h4" className="faq__categorie_question">
            {props.titre}
        </Header>
    );
}

const Content = (props) => {
    return (
        <div className="faq__question_reponse">
            <Header as='h5' className="faq__the_question">
                {props.question}
            </Header>

            <p className="faq__reponse">{props.reponse}</p>

        </div>
    );
}

const Mycolumn = (props) => {
    return (
        <Grid.Column width={4} className="faq__grid">
            <Titre titre={props.titre} />
            <Content question={props.question_one} reponse={props.reponse_one} />
            <Content question={props.question_two} reponse={props.reponse_two} />
        </Grid.Column>
    );
}

const First = () => {
    return (
        <Grid stackable>
            <Grid.Column width={16} className="faq__diapo">
                <div className="faq__questions">
                    <Header as="h3" textAlign="center" content="questions? look here" className="faq__question_one" />
                    <Header as="h4" textAlign="center" content="Take a look at the most asked questions" className="faq__take_look" />
                </div>

                <Image src={Down} width="40" height="40" className="faq__go_down" />

            </Grid.Column>
        </Grid>
    );
}

const Second = (props) => {
    return (
        <div className="faq__all_questions">
            <Grid stackable centered>
                <Mycolumn titre="Payement"
                          question_one="? premiere petite question pour payement"
                          reponse_one="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"
                          question_two="? deuxiem petite question pour payement"
                          reponse_two="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"/>

                <Mycolumn titre="Bills"
                          question_one="? premiere petite question pour bills"
                          reponse_one="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"
                          question_two="? deuxieme petite question pour bills"
                          reponse_two="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"/>
                <Mycolumn titre="Instalment"
                          question_one="? premiere petite question pour instalment"
                          reponse_one="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"
                          question_two="? deuxieme petite question pour instalment"
                          reponse_two="Alors une ptite description de l
                                app ´lication s impose ici. trouver
                                des phrases courtes, conscises et
                                comprehensibles à la premiere
                                lecture .lors une ptite description"/>
            </Grid>
        </div>
    );
}

const Third = () => {
    return (
        <div className="faq__still_question">
            <Grid stackable centered>
                <Grid.Column width={12} >
                    <Header as="h3" textAlign="center" content="still have questions ?" className="still_question" />
                    <div className="customized_service">
                        Log In and get a customized service just for you
                    </div>
                    <div className="btn_connexion">
                        <Link to="/login"> <span className="sign__btnss"> CONNEXION </span>  </Link>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}



const FAQ = (props) => {
    return (
        <Container fluid>
            <Navigation/>
            <First/>
            <Second/>
            <Third/>
            <Footer/>
        </Container>
    );
}

export default FAQ;