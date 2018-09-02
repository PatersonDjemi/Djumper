import React from 'react';
import  { GridRow, Container, Grid, Image } from 'semantic-ui-react';


import MoneyPanel from './transfertPanel';


const MoneyContent = (props) => {
    return (
        <Grid.Column width={11}>
                
            <div className="money__options__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
            </div>

            <MoneyPanel>
                <div className="transfert__block__content">
                    {props.children}
                </div>
            </MoneyPanel>

            <div className="transfert__progress">
                <div className="transfert__step" style={{backgroundColor: 'red'}}></div>
                <div className="transfert__step"></div>
                <div className="transfert__step"></div>
            </div>
        </Grid.Column>
    );
}

export default MoneyContent;

