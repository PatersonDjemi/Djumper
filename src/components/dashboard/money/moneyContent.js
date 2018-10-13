import React from 'react';
import  { GridRow, Container, Grid, Image, Segment } from 'semantic-ui-react';

import Calendar from '@assets/Calendar.svg';
import MoneyPanel from './transfertPanel';


const MoneyContent = (props) => {
    return (
        <Grid.Column width={11}>
            <div className="MoneyContentWrapper">
                <Segment text raised className="transfertWrapper">

                    <div className="transfert__block__title"> 
                        <Image src={Calendar} height="20" width="20" className="test__block__image" />
                        <span className="transfert__block__type"> {props.title} </span>
                    </div>

                    <div className="money__options__text">
                        {props.description}
                    </div>

                    {/* <div className="transfert__progress">
                        <div className="transfert__step" style={{backgroundColor: 'red'}}></div>
                        <div className="transfert__step"></div>
                        <div className="transfert__step"></div>
                    </div> */}

                    <MoneyPanel>
                        <div className="transfert__block__content">
                            {props.children}
                        </div>
                    </MoneyPanel>

                </Segment>
            </div>
        </Grid.Column>
    );
}

export default MoneyContent;

