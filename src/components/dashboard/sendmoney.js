import React, { Component } from 'react';
import GridRow, { Container, Grid, Image } from 'semantic-ui-react';

import Layout from './withSideBarLayout'


const Description = () => {
    return (
        <div className="sendmoney__descrition">
            <h3 className="sendMoney__title">
                Send, Request Money, Create a check
            </h3>  
            <div className="sendmoney__description-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <br/>sed diam 
                voluptua. At vero eos et accusam et justo duo
            </div>
        </div>
    )
}


class SendMoney extends Component {

    render() {
        return (
            <div>
                
                <Description />

                <Layout.LayoutWithSideBar>

                    <Layout.MainContent>
                        <Grid stackable >
                            <Grid.Column width={15}>
                                <ul className="tab__nav">
                                    <li className="tab__nav__link"> Send money </li>
                                    <li className="tab__nav__link"> Request money </li>
                                    <li className="tab__nav__link"> Create check </li>
                                </ul>
                                <div className="tab__link__text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor
                                </div>

                                <div className="transfert__block">
                                    <div className="transfert__sender">
                                        <div className="transfert__type"> send money </div>
                                        <div className="transfert__sender__image">
                                            photo ici
                                        </div>
                                        <div className="transfert__sender__name">
                                            Hassan Paterson
                                        </div>
                                    </div>
                                    <div className="transfert__sreceiver">
                                        receiver
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid>
                        
                    </Layout.MainContent>

                    <Layout.Sidebar>

                        side
                    </Layout.Sidebar>
            

                </Layout.LayoutWithSideBar>

            </div>

        )
    }

}

export default SendMoney;