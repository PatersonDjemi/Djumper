import React from 'react';
import { Icon } from 'semantic-ui-react';


export const notifOrMsg = (...args) => {
    return (props) => {

        let letter;
        if (args.length > 0) {
            letter = props.from.split(' ');
            letter = letter[0].charAt(0);
        }

        let th = props.when.split(' ');       

        return (
            <div className="notifBlock">
            { args.length == 0 ? null: (<div className="notifBlock__profil">
                <div className="profil__letter"> {letter}  </div>
             </div>) } 
             <div className="notifBlock__content">
                 <div className="notifBlock__content__header">
                    
                     <div className="notifBlock__content__from"> {props.from} </div>
                     {/* <div className="notif__time"> {props.when} </div> */}
                     <Icon name="star" size="large" className="star__icon"/>
                 </div>
                { args.length == 0 ? (<div className="notifBlock__content__title"> {props.title} </div>) : null } 
                <div className="notifBlock__content__wrapper">
                    <div className="notifBlock__content__text"> {props.content}
                    <span className="show_more_less"> Show more </span>
                    </div>
                    <div className="notif__times"> 
                        <span>{th.length === 3 ? th[0] : props.when }</span> <br/>
                        <span>{th.length === 3 ? `${th[1]} ${th[2]}` : null }</span>
                    </div>                
                </div>

             </div>
         </div>
        );

    }
}
