import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home_page';
import FAQ from './faq_page'
import Thankyou from './thankyou'
import CheckMail from './checkedmail'
import Footer from './footer'



class Webpages extends Component {

    render(){
        const {path, url} = this.props.match; // => /
        return (
            <div>
                <Switch>
                    <Route path={`${path}faq`} component={FAQ} /> {/* => /faq */}
                    <Route path={`${path}thankyou`} component={Thankyou} /> {/* => /thankyou */}
                    <Route path={`${path}checkedmail/:token`} component={CheckMail} /> {/* => /checkedmail/:token */}
                    <Route path={`${path}`} exact component={Home} /> {/* => / */}
                    {/* il manque le router qd rien match ici */}
                </Switch>
                <Footer/> {/* peut etre à rendern en tant que route */}
            </div>
        );
    }
}

export default Webpages;
