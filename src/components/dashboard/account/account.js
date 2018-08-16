import React from 'react';
import { Image, Segment, Icon, Button } from 'semantic-ui-react'


import QuickOverview from './quickOverview'
import Resume from './resume';
import Layout from '../withSideBarLayout';

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

                {/* <span className="get_start link__paypal"></span> */}
                <span className="link__paypal">
                    <Button color='red' size="big">Link your Paypal Account</Button>
                </span>
                
            </div>
        </Segment>
    );
}

const SideSection = ({ title, children }) => {
    return (
        <div className="sideBar__block">
            { title? (<div className="sideBar__block__title">
                { title } </div>) : null }
            { children }
        </div> 
    );
}

const Account = (props) => {
    return (
        <div>
            <QuickOverview theItems={props.theItems} />

            <Layout.LayoutWithSideBar>

                <Layout.MainContent>

                    <Resume theItems={props.theItems} />

                </Layout.MainContent>

                <Layout.Sidebar>

                    <SideSection>
                        <Segment size="huge" className="see__next__month">
                           <div className="see__next__content">
                                Lorem ipsum dolor sit amet, consetetur sadip scing elitr
                                nvidunt ut labore et dolore magna aliquyam erat
                           </div> 
                           <div className="see__next__amount">
                                <div className="next__text celled">
                                    Next month : <br/>
                                    voraus.: 29/05/18
                                </div> 
                                <div className="next__amount celled"> 354,98 eur</div>
                           </div> 
                           <Icon name="chevron circle up" size="big" className="up__down__see"/>
                        </Segment>
                    </SideSection>

                    <SideSection  title="Do you have paypal account ?">
                        <AddPaypalSection/>
                    </SideSection>

                    <SideSection title="Last activies">
                        <div className="calendar__description">
                            Lorem ipsum dolor sit amet, consetetur sadip scing elitr
                            nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        </div>
                    </SideSection>


                </Layout.Sidebar>

            </Layout.LayoutWithSideBar>
        </div>
    );
}

export default Account;