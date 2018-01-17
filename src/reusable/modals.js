import React from 'react';
import { Container, Grid, Header, Button, Form} from 'semantic-ui-react'


export const MyModalHeader = (props) => {
    return (
        <Grid.Column width={16} className="ModalHeader">
            <h3 className={props.className}> {props.ModalTitle} </h3>
        </Grid.Column>
    );
};

export const MyModalContent = (props) => {
    return (
        <Grid.Column width={16}>
            {props.children}
        </Grid.Column>
    );
}


export const MyModalFooter = (props) => {
    return (
        <Grid.Column width={16}>
            {props.children}
        </Grid.Column>
    );
}