import React from 'react';
import  { Container, Grid, Image } from 'semantic-ui-react';


const MainContent = (props) => {
    return (
        <Grid.Column width={11} className="dashboard__mainContent">
            {props.children}
        </Grid.Column>
    )
}

const Sidebar = (props) => {
    return (
        <Grid.Column width={4} className="dashboard__sideBar">

            {props.children}

        </Grid.Column>
    );
}

const LayoutWithSideBar = (props) => {
    return (
        <Container fluid >
            <Grid stackable centered >

                {props.children}

            </Grid>
        </Container>
    );
}


export default {
    LayoutWithSideBar,
    MainContent,
    Sidebar
};



{/* <Grid stackable centered className="cardBox" >
<Grid.Column width={8}>
    <CardBox card="Bank card"
             title="Link a bank account"
             src={bank}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a bank account" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Credit card"
             title="Link a credit card"
             src={credit}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a credit card" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Paypal account"
             title="Link a paypal account"
             src={paypal}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a paypal account" />
</Grid.Column>
</Grid> */}