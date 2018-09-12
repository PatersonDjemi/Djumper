import React, {Component} from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';


import {FirstStep} from './firstStep';
import {SecondStep} from './secondStep';

class MoneyPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStep: true,
            secondStep: false
        }

        this.nextStep = this.nextStep.bind(this);
    }

    nextStep() {
        if (this.state.firstStep) {
           return this.setState({firstStep: false, secondStep: true});
        }
        return this.setState({firstStep: true, secondStep: false})
    }

    render() {
        return (
            <div className="transfert__block">

                <div className="transfert__block__content">
    
                    {this.state.firstStep && <FirstStep /> }
                    {this.state.secondStep && <SecondStep />  }                    
    
                    <div className="transfert__btn__block">
                        <span className="tranfert__btn btn__cancel "> cancel </span>
                        <span onClick={this.nextStep} className="tranfert__btn btn__next "> next </span>
                    </div>
    
                </div>
    
            </div>
        );
    }
}

export default MoneyPanel;

