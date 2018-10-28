import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

const SeeNext = (props) => {
    return (
        <div style={{marginBottom: 1 + 'rem'}}>
            <div className="text__see__next">
                Lorem ipsum dolor sit amet, consetetur sadip scing elitr
                nvidunt ut labore et dolore magna aliquyam erat
                <Icon name="chevron up" size="large" className="up__down__see"/>
            </div>
            <Segment size="huge" className="see__next__month"> 
                <div className="see__next__amount">
                    <Icon name="star" size="big"></Icon>
                    <div className="next__text "> Next month </div> 
                    <div className="next__amount "> 354,98 eur</div>
                </div> 
            </Segment>
        </div>
    );
}

export default SeeNext;
