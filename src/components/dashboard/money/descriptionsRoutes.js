import React from 'react';
import { Route, Switch } from 'react-router-dom';


const PageDescription = (props) => (
    <div className="sendmoney__describes">
        <h3 className="sendMoney__title">
            {props.title}
        </h3>  
        <div className="sendmoney__description-text">
            {props.description}
        </div>
    </div>
);


const DescriptionRoute = (props) => {
    const match = props.match;
    return (
        <React.Fragment>
            <Route path={`${match.url}/sendmoney`} exact render={ props => (
                <PageDescription 
                    title="Send money to all your relatives"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                    voluptua. At vero eos et accusam et justo duo"
                />
            )} />
            <Route path={`${match.url}/requestmoney`} exact render={ props => (
                <PageDescription 
                    title="Request money from all your friends"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                    voluptua. At vero eos et accusam et justo duo"
                />
            )} />
            <Route path={`${match.url}/createcheck`} exact render={ props => (
                <PageDescription 
                    title="Create a check for anyone"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam 
                    voluptua. At vero eos et accusam et justo duo"
                />
            )} />
        </React.Fragment>

    );
}

export default DescriptionRoute;