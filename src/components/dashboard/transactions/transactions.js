import React, { Component } from 'react';
import  {GridRow, Container, Grid, Image } from 'semantic-ui-react';
import Layout from '../withSideBarLayout'

import Calendar from '@assets/Calendar.svg'




export const FilterButton = (props) => {
    return (
        <div className="filter__btn"> 
           { props.imgs ? <Image src={props.src} className="filter__icons" height="20" width="20" />: null} 
            <span className="filter__name"> {props.name} </span>
        </div>        
    )
}



const Transaction = (props) => {
    return (
        <Grid.Row celled='true' className="transactions__block">
            <Grid.Column width={3} className="mois__date">
                <div className="transactions__block_title"> Date </div>
                <div className="transactions__data"> { props.date }</div>
            </Grid.Column>
            <Grid.Column width={6}>
                <div className="transactions__block_title"> Transaction Id </div>
                <div className="transactions__data"> { props.transactionId } </div>
            </Grid.Column>
            <Grid.Column width={4}>
                <div className="transactions__block_title"> Transaction type </div>
                <div className="transactions__data"> { props.type } </div>
            </Grid.Column>
            <Grid.Column width={3}>
                <div className="transactions__block_title"> Amount </div>
                <div className="transactions__data"> <span> {props.amount} </span> <span> { props.amountDevise } </span> </div>
            </Grid.Column>
        </Grid.Row>
    );
}


class Transactions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout.LayoutWithSideBar>
                <Layout.MainContent>
                    <Grid stackable>
                        <Grid.Column width={15}>

                            <div className="filter">
                                <FilterButton src={Calendar} imgs={true} name="date" />
                                <FilterButton imgs={false} name="Last 30 days" />
                                <FilterButton imgs={false} name="Payments" />
                                <FilterButton imgs={false} name="Refunds" />
                                <FilterButton imgs={false} name="More options" />
                            </div>

                            <div className="transactions">
                                <h3 className="transactions__title"> Transactions </h3>

                                <Grid stackable>
                                    <Transaction 
                                        date="29/02/18" 
                                        transactionId="#125asddf78954asr7854789zt45"
                                        type="Payments"
                                        amount="500,00"
                                        amountDevise="eur" />
                                    <Transaction
                                        date="29/02/18" 
                                        transactionId="#125asddf78954asr7854789zt45"
                                        type="Payments received"
                                        amount="152,20"
                                        amountDevise="eur" />
                                    <Transaction
                                        date="09/12/17" 
                                        transactionId="#125asddf78954asr7854789zt45"
                                        type="Refunds"
                                        amount="52,20"
                                        amountDevise="eur" />
                                    <Transaction 
                                        date="15/08/17" 
                                        transactionId="#125asddf78954asr7854789zt45"
                                        type="Sent money"
                                        amount="100,00"
                                        amountDevise="eur" />
                                </Grid>

                                {/* <div className="mytransaction"></div> */}
                            </div>
                        </Grid.Column>
                    </Grid>
                </Layout.MainContent>  

                {/* <Layout.Sidebar>
                    ji
                </Layout.Sidebar>       */}
            </Layout.LayoutWithSideBar>
        )
    }

}

export default Transactions;