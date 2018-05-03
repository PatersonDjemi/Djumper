import React, { Component } from 'react';
import GridRow, { Container, Grid, Image } from 'semantic-ui-react';
import Layout from './withSideBarLayout'

import { FilterButton } from './transactions'
import Calendar from '../../../assets/Calendar.svg'


export const Transaction = (props) => {
    return (
        <Grid.Row celled="true" className="transaction__block">
            <Grid.Column width={3} className="mois__date">
                <div className="transaction__mois"> { props.mois } </div>
                <div className="transaction__date"> { props.date }</div>
            </Grid.Column>
            <Grid.Column width={8}>
                <div className="transaction__receiver"> { props.receiver }</div>
                <div className="transaction__type"> { props.type } </div>
            </Grid.Column>
            <Grid.Column width={3}>
                <div className="transaction__amount"> { props.amount }</div>
                <div className="transaction__amount_devise"> { props.amountDevise }</div>
            </Grid.Column>
            <Grid.Column width={2} className="period__nber">
                <span className="transaction__period_nber"> { props.periodNber }</span>
                <span className="transaction__period_time"> { props.periodTime } </span>
                <div className="status" > <span> status </span> <span style={{ color: `${props.statusColor}`}}> { props.status } </span> </div>                               
            </Grid.Column>
            <div className="progress">
                <div className="progress__bar" style={{ width: `${props.width_}%`, backgroundColor: `${props.color}` }}></div>
            </div>
        </Grid.Row>      
    )
}

class Articles extends Component {

    render() {
        return (

            <Layout.LayoutWithSideBar>
                <Layout.MainContent>
                <Grid stackable>
                        <Grid.Column width={15}>

                            <div className="filter">
                                <FilterButton src={Calendar} imgs={true} name="date" />
                                <FilterButton imgs={false} name="Last 30 days" />
                                <FilterButton imgs={false} name="Completed" />
                                <FilterButton imgs={false} name="Not completed" />
                                <FilterButton imgs={false} name="More options" />
                            </div>

                            <div className="transactions">
                                <h3 className="transactions__title"> Articles </h3>
                                <Grid stackable centered className="main__transaction" >
                                    <Transaction mois="Avr"
                                        date="29/18" 
                                        receiver="Zalando SE"
                                        type="Payment"
                                        amount="500,00"
                                        amountDevise="eur"
                                        periodNber="5"
                                        periodTime="months"
                                        width_="50" 
                                        color="#2196F3"
                                        status="50%" 
                                        statusColor="#2196F3" />
                                    <Transaction mois="Jan"
                                        date="29/18" 
                                        receiver="Hassan Paterson"
                                        type="Payment"
                                        amount="100,00"
                                        amountDevise="eur"
                                        periodNber="1"
                                        periodTime="fois"
                                        width_="75"
                                        color="#2196F3"
                                        status="75%"
                                        statusColor="#2196F3" />
                {/* les transactions d envois d argents n ont pas de periode time */}
                                    <Transaction mois="Dec"
                                        date="29/18" 
                                        receiver="Djumper AG"
                                        type="Payment"
                                        amount="75,00"
                                        amountDevise="eur"
                                        periodNber="1"
                                        periodTime="month"
                                        width_="25"
                                        color="#2196F3"
                                        status="25%"
                                        statusColor="#2196F3" />
                                    <Transaction mois="Sept"
                                        date="29/18" 
                                        receiver="Wallas wilson"
                                        type="Payment"
                                        amount="375,00"
                                        amountDevise="eur"
                                        periodNber="1"
                                        periodTime="month"
                                        width_="100"
                                        color="#00BCD4"
                                        status="100%"
                                        statusColor="#00BCD4" />
                                </Grid>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Layout.MainContent>
            </Layout.LayoutWithSideBar>

        )
    }

}

export default Articles;