import React from 'react'
import GridColumn, { Container, Grid, Header, Button } from 'semantic-ui-react'


const Advantage = (props) => {
    return (
        <li className="advs">
            &rarr;
            <span className="adv">{props.text}</span>
        </li>
    );
}

const TripBox = (props) => {
    return (
        <div className="art_trip">
            <div className="trip_box__title">{props.title}</div>
            <ul className="advantage">
                {props.children}
            </ul>
        </div>        
    );
}

const H_Fourth = () => {
    return (
        <Container fluid className="never_miss">
            <Grid stackable centered columns="twelve">

            <Grid.Row className="never_miss__box_row1">
                    <Grid.Column computer={12}>
                        <h2 className="never_miss__title">never miss an offer for your trip</h2>
                    </Grid.Column>
                    <Grid.Column computer={8} tablet={10}>
                        <p className="never_miss__text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                            mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
                            0depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte
                            pour réaliser un livre spécimen de polices de texte
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="never_miss__box_row2">
                    <Grid.Column computer={6} >
                        <TripBox title="Next Trip ?">
                            <Advantage text="Le Lorem Ipsum est simplement du fauxxxxx"/>
                            <Advantage text="mise en page avant impression. Le Lorem Ipsum est le"/>
                            <Advantage text="Le Lorem Ipsum est simplement du fauxLe Lorem Ipsum"/>
                            <Advantage text="Le Lorem Ipsum est simplement du faux un livre spéci"/>
                        </TripBox>
                    </Grid.Column>
                    <Grid.Column computer={6} >
                        <TripBox title="Last Minute ?" >
                        <Advantage text="Le Lorem Ipsum est simplement du faux"/>
                            <Advantage text="mise en page avant impression. Le Lorem Ipsum est le"/>
                            <Advantage text="Le Lorem Ipsum est simplement du fauxLe Lorem Ipsum"/>
                            <Advantage text="Le Lorem Ipsum est simplement du faux un livre spéci"/>                        
                        </TripBox>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default H_Fourth;