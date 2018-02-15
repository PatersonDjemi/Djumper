import React from 'react'
import { Container, Grid, Header, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Navigation from './navigation'

import Down from '../../assets/lnr-chevron-down.svg'


const Titre = (props) => {
    return (
        <Header as="h2" className="categorie_question">
            {props.titre}
        </Header>
    );
}

const Content = (props) => {
    return (
        <div className="question_reponse">
            <Header as='h4' className="the_question">
                {props.question}
            </Header>

            <p className="reponse">{props.reponse}</p>

        </div>

    );
}

const Mycolumn = (props) => {
    return (
        <Grid.Column width={4}>
            <Titre titre={props.titre} />
            <Content question={props.question_one} reponse={props.reponse_one} />
            <Content question={props.question_two} reponse={props.reponse_two} />
        </Grid.Column>
    );
}

const First = () => {
    return (
        <Grid stackable>
            <Grid.Column width={16} className="faq_first">
                <div className="questions">
                    <Header as="h1" textAlign="center" content="QUESTIONS? LOOK HERE" className="question_one" />
                    <Header as="h4" textAlign="center" content="Take a look at the most asked questions" className="take_look" />
                </div>

                <Image src={Down} width="40" height="40" className="go_down" />
            </Grid.Column>
        </Grid>
    );
}

const Second = (props) => {
    return (
        <div className="faq_second">
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
        <div className="faq_third">
            <Grid stackable centered>
                <Grid.Column width={12} >
                    <Header as="h2" textAlign="center" content="STILL HAVE QUESTIONS ?" className="still_question" />
                    <div className="customized_service">
                        Log In and get a customized service just for you
                    </div>
                    <div className="btn_connexion">
                        <Link to="/login"> <Button size="big" > CONNEXION </Button> </Link>
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
        </Container>
    );
}

export default FAQ;