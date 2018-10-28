import React, { Component } from 'react';
import { ProgressSteps, StepInstruction } from './moneyStepsIntructions';
import MoneyContent from './moneyContent';

const mysteps = [
    {
        number: "1",
        title: "Choose the receiver of the check",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr ",
        status:"Succeed"
    },
    {
        number:"2",
        title:"Give the amount of the check",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr ",
        status:"Succeed"
    },
    {
        number:"3",
        title:"Confirm it baby",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr ",
        status:"Succeed"
    }
]

class CreateCheck extends Component {
    render() {
        return (
            <React.Fragment>

                <ProgressSteps steps={mysteps} renderInstruction={(steps) => (
                    steps.map((step, index) => {
                        return <StepInstruction key={`${step.title}+${index}`}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                                status={step.status} />
                    })
                )} />
    
                <MoneyContent title="CREATE A CHECK"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor" /> 
                
            </React.Fragment>
        );
    }
}


export default CreateCheck;