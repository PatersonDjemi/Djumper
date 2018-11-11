import React from 'react';
import { Image, Segment } from 'semantic-ui-react';
import propTypes from "prop-types";

const styleDescription = {
    display: "inline-block",
    marginBottom: .5 + "rem"
};

const Overview = (props) => {
    const {ob} = props;
    return (
        <Segment className="box__banner">
            <div className="box__text" style={{ width: 55 +'%'}}>
                <div className="box__banner_title">
                    <span className="bg_title"> {props.title} </span> <br/>
                    <span className="sm_title" style={styleDescription}> {props.description} </span> <br/>
                    <span className="sm_title"> { ob.date } </span> <br/>
                </div>
                <div className="box__amount">
                    <span className="sum"> {ob.amount} </span>
                    <span className="devise__overview" style={{marginRight: 0}}> {ob.devise} </span>                    
                </div>
            </div>
            <div className="box__img">
                <Image src={props.src} height="60" width="60" className="iconsboxes" />
            </div>
        </Segment>
    );
}

Overview.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    ob: propTypes.shape({
        date: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        devise: propTypes.string.isRequired
    })
}

export default Overview;
