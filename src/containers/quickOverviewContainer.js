import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import propTypes from "prop-types";

import Overview from "@components/dashboard/account/quickOverview";

import wallet from "@assets/wallet.svg";
import transfer from "@assets/transfer-money.svg";
import request from "@assets/get-money.svg";

class QuickOverviewContainer extends Component {

    static mapStateToProps({ ratePlan }) {
        return { ratePlan };
    }

    setPropsOb(categorie, replaceDate="") {
        const { ratePlan } = this.props;
        if (Object.keys(ratePlan).length === 0) {
            return {
                date: replaceDate,
                amount: "0.00",
                devise: "EUR"
            }
        }
        switch (categorie) {
            case "BALANCE": 
                return { date: ratePlan.SignUpDate, amount: ratePlan.totaBalance, devise: ratePlan.devise};
            case "LASTPAYMENT": 
                return { date: ratePlan.dateOfLastPayment, amount: ratePlan.lastPayment, devise: ratePlan.devise};
            case "UPCOMINGPAYMENT": 
                return { date: ratePlan.dateOfUpcomingPayment, amount: ratePlan.upcomingPayment, devise: ratePlan.devise};
            default: {
                // voir quoi retourner comme valeur par defaut
            }
        }
    }

    render() {
        return (
            <Container fluid style={{ marginBottom: '3rem', backgroundColor: '#f1f1f1' }}>
                <Grid stackable centered>
                    <Grid.Column width={15}>
                        <section>   
                            <div className="quick_overview">
                                Quick Overview
                            </div>
    
                            <div className="overview">
                                <Overview title="Total Balance" 
                                    description="montant disponible"
                                    src={wallet}
                                    ob={this.setPropsOb("BALANCE", "No previously oders")} 
                                />
                                <Overview title="Last Payment"
                                    description="what you paid last month"
                                    ob={this.setPropsOb("LASTPAYMENT", "No previously oders")}
                                    src={request} 
                                />
                                <Overview
                                    title="Upcoming Payment"
                                    description="what you should pay this month"
                                    ob={this.setPropsOb("UPCOMINGPAYMENT", "No previously oders")}
                                    src={transfer}
                                 />
                            </div>
                        </section>  
                    </Grid.Column>
                </Grid>    
            </Container>     
        );    
    }
}

QuickOverviewContainer.propTypes = {
    ratePlan: propTypes.object.isRequired
}

export default connect(QuickOverviewContainer.mapStateToProps)(QuickOverviewContainer);
