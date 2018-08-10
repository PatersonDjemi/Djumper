import React from 'react';


export const notifOrMsg = (...args) => {
    return (props) => {

        let letter;
        if (args.length > 0) {
            letter = props.from.split(' ');
            letter = letter[0].charAt(0);
        }

        return (
            <div className="notifBlock">
            { args.length == 0 ? null: (<div className="notifBlock__profil">
                <div className="profil__letter"> {letter}  </div>
             </div>) } 
             <div className="notifBlock__content">
                 <div className="notifBlock__content__header">
                     <div className="notifBlock__content__from"> {props.from} </div>
                     <div className="notif__time"> {props.when} </div>
                 </div>
                { args.length == 0 ? (<div className="notifBlock__content__title"> {props.title} </div>) : null } 
                 <div className="notifBlock__content__text"> {props.content} <span className="show_more_less"> Show more </span>
                 </div>
             </div>
         </div>
        );

    }
}

// {() => { let ar = props.from.split(' ');
// return ar[0].charAt(0)
// }}