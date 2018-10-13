import React, {Component} from 'react';
import  { GridRow, Container, Grid, Image, Icon } from 'semantic-ui-react';

import Sendmoney from '@assets/send-money.svg';

import MoneyPanel from './transfertPanel';
import MoneyContent from './moneyContent';


export const StepInstruction = (props) => (
    <div className="step1Intructions">
        <div className="step__table">
            <div className="step__description__number"> {props.number} </div>
            <div className="step__description__text">
                <span style={{ fontWeight: 600 }}> {props.title} </span> 
                <p style={{ marginBottom: 1+'rem'}}> {props.description} </p>
                <div className="step__status">
                    <Icon name="check circle outline" size="large" className="step__status__icon" />
                    <span className="step__status__text"> {props.status} </span>
                </div>
            </div>    

        </div>
    </div>
);


export const ProgressSteps = (props) => {
    return (
        <Grid.Column width={5}>
            <div className="menu__options__wrapper">
            
                <div className="steps__description">
                    Make all your transaction in three simple steps.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr                    
                </div>

                {props.renderInstruction(props.steps)}

            </div>
        </Grid.Column>
    );
}
