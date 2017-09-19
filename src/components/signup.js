import React from 'react'
import { Container, Grid, Header, Button, Form, Input, Checkbox } from 'semantic-ui-react'



const SignUp = () => {
    return (
        <Container fluid className="_signUpPage">
            <Grid centered stackable className="ki">
                <Grid.Column computer={7} tablet={5}>
                    <div className="_text-description">
                        <Header as="h1" className="" textAlign="left">
                            DJUMPER: EASY-FLEXIBEL-SMART
                        </Header>
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition <br/> et la
                            mise en page avant impression. Le Lorem Ipsum est le faux texte standard <br/> de l'imprimerie
                            0depuis les années 1500, quand un peintre</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={5} tablet={7}>
                    <div className="_FormDiv">
                        <div className="_FormContent">
                            <Header as="h1" content="CREATE AN ACCOUNT" className="_formTitel" textAlign="center"/>
                            <Form className="_my-form">
                                <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' width={16} />
                                <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' width={16} />
                                <Form.Field id='form-input-control-email' control={Input} label='Email' placeholder='Email' width={16} />
                                <Form.Field id='form-input-control-password' control={Input} label='Password' placeholder='Password' width={16} />
                                <Form.Field
                                    control={Checkbox}
                                    label='I agree to the Terms and Conditions.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                            mise en page avant impression. Le Lorem Ipsum est' />
                                <Button primary size="big" className="_sign-up-button" fluid> SIGN UP </Button>
                            </Form>
                            <div className="_already-account">
                                <Header as="h5" textAlign="center">
                                    Already have a DJUMPER account ? <a> login</a>
                                </Header>

                            </div>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </Container>
    );
}



export default SignUp;