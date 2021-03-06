import React from 'react';
import { Icon } from 'semantic-ui-react';


export const notifOrMsg = (...args) => {
    return (props) => {

        let letter;
        let content = props.content;

        if (args.length > 0) {
            letter = props.from.split(' ');
            letter = letter[0].charAt(0);
        }

        let th = props.when.split(' '); 
        
        if ( props.content.length > 40 ) {
            content = `${props.content .substring(0, 41)} ...`;
        }

        return (
            <div className="notifBlock">
            { args.length == 0 ? null: (<div className="notifBlock__profil">
                <div className="profil__letter"> {letter}  </div>
             </div>) } 
             <div className="notifBlock__content">
                <div className="notifBlock__content__header">
                    
                    <div className="notifBlock__content__from"> {props.from} </div>
                     {/* <div className="notif__time"> {props.when} </div> */}
                    <div> {th.length === 3 ? `${th[0]} ${th[1]} ${th[2]}` : props.when } </div>
                     
                </div>

                { args.length == 0 ? (<div className="notifBlock__content__title"> {props.title} </div>) : null } 

                <div className="notifBlock__content__wrapper">
                    <div className="notifBlock__content__text"> { content }
                    {/* <span className="show_more_less"> Show more </span> */}
                    </div>
                    <div className="notif__times"> 
                        <Icon name="star" size="large" className="star__icon"/>
                    </div>                
                </div>

             </div>
         </div>
        );

    }
}
