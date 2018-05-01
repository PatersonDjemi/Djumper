import React from 'react';
import { Image } from 'semantic-ui-react'

import QuickOverview from './quickOverview'
import Resume from '../resume';
import Layout from './withSideBarLayout';

import paypal from '../../../assets/paypal.svg'


const AddPaypal = () => {
    return (
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

            <span className="get_start link__paypal"> Link your Paypal Account </span>
        </div>
    );
}

const SideSection = (props) => {
    return (
        <div className="sideBar__block">
            <div className="sideBar__block__title">
                { props.title }
            </div>
            { props.children }
        </div> 
    );
}

const Account = () => {
    return (
        <div>
            <QuickOverview />

            <Layout.LayoutWithSideBar>

                <Layout.MainContent>
                    <Resume />
                </Layout.MainContent>

                <Layout.Sidebar>

                    <SideSection title="Do you have paypal account ?">
                        <AddPaypal/>
                    </SideSection>

                    <SideSection title="Calendar">
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