import React from 'react';

export const FirstStep = (props) => {
    return (
        <div>
            <div className="tranfert__input__holder">
                <label htmlFor="" className="transfert__email"> Enter an email </label>
                <input type="text" placeholder="Enter an email" id="email__input" />
            </div>            

            <div className="transfert__to__block" >
                <div className="transfert__test__to"> to: </div>
                <div className="transfert__to__name">
                    <span className="text__to__name"> Paterson Hassan </span>
                    <span className="text__to__name"> Rebecca Hanke</span>
                </div>
            </div>
            <div className="inputs__summes" style={{ paddingTop: '3rem', paddingBottom: '3rem'}}>
                <div className="whatISend">
                    <label style={{ marginBottom: .5 + 'rem', display: 'inline-block'}}> Send </label>
                    <input type="text" placeholder="10,00" className="input__money" />
                    <span className="transfert__device"> eur </span>
                </div>
                <div className="whatYouReceive">
                    <label  style={{ marginBottom: .5 + 'rem', display: 'inline-block'}}> Receive </label>
                    <input type="text" placeholder="10,00" className="input__money" />
                    <span className="transfert__device"> eur </span>
                </div>
            </div>
        </div>
    );
}