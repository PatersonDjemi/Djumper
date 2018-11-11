import React from "react";
import { Image, Segment, Button } from "semantic-ui-react";

import paypal from '@assets/paypal.svg'

const AddPaypalSection = () => {
    return (
        <Segment >
            <div className="paypal_account">
                <div className="paypal__header" style={{ position: 'relative'}}>
                    <span> paypal account </span>
                    <div className="paypal__title"> Link your paypal </div>
                    <Image src={paypal} height="40" width="40" className="imgpaypal" />
                </div>
                <div className="paypal__text">
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor i
                    nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                </div>

                <span className="link__paypal">
                    <Button color='red' size="big" className="link__paypal_btn">Link your Paypal Account</Button>
                </span>
                
            </div>
        </Segment>
    );
}

export default AddPaypalSection;