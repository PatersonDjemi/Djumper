import React from "react";

import QuickOverviewContainer from "@containers/quickOverviewContainer";
import MainContent from "./mainContent";
import SideBlock from "./sideBlock";
import AddPaypalSection from "./addPaypal";
import Layout from '../withSideBarLayout';
import NextMonthOverview from '@containers/nextMonthOverviewContainer'

const Account = () => {
    return (
        <React.Fragment>

            <QuickOverviewContainer />

            <Layout.LayoutWithSideBar>

                <Layout.MainContent>

                    <MainContent />

                </Layout.MainContent>

                <Layout.Sidebar>

                    <SideBlock>
                        <NextMonthOverview />
                    </SideBlock>

                    <SideBlock  title="Do you have paypal account ?">
                        <AddPaypalSection />
                    </SideBlock>

                    <SideBlock title="Last activies">
                        <div className="calendar__description">
                            Lorem ipsum dolor sit amet, consetetur sadip scing elitr
                            nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        </div>
                    </SideBlock>

                </Layout.Sidebar>

            </Layout.LayoutWithSideBar>
        </React.Fragment>
    );
}

export default Account;