import React from 'react';
import { Icon, Button } from 'semantic-ui-react'

// const RoundIcon = (props) => {
//     return (
//         <div className="round__icon">
//             <Icon name={props.name} size={props.size} />
//         </div> 
//     )
// }


export const FirstStep = (props) => {
    return (
        <div>
            {/* <div className="transfert__input__btn">
                <Button primary size="large" >Send email</Button>
            </div> */}
            <div className="tranfert__input__holder">
                <label htmlFor="" className="transfert__email"> Enter an email </label>
                <input type="text" placeholder="Enter an email" id="email__input" />
            </div>            

            <div className="transfert__to__block" >
                <div className="transfert__test__to"> receiver: </div>
                <div className="transfert__to__name">
                    <span className="text__to__name"> Paterson Hassan </span>
                    <span className="text__to__name"> Rebecca Hanke</span>
                </div>
            </div>
        </div>
    );
}