import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridRow, { Container, Grid, Image } from 'semantic-ui-react';


import Layout from './withSideBarLayout'
import { FilterButton } from './transactions'

import Calendar from '@assets/Calendar.svg'
import plane from '@assets/aeroplane.svg'


export const Products = (props) => {
    return (
        <Grid.Row celled="true" className="transaction__block">
            <Grid.Column width={2} className="mois__date">
                <div className="transaction__mois"> { props.mois } </div>
                <div className="transaction__date"> { props.date }</div>
            </Grid.Column>
            <Grid.Column width={6}>
                <div className="transaction_">
                    <div className="transaction__icon">
                        <Image src={props.src}  height="20" width="20" />
                    </div>
                    <div className="transaction__receiver"> { props.receiver }</div>
                    <div className="transaction__type"> { props.type } </div>
                </div>
            </Grid.Column>
            <Grid.Column width={4}>
                <div className="transaction__amount"> { ` ${props.amount} ${props.amountDevise} ` } </div>
                <div className="transaction__instalment"> rate: { props.instalment }</div>
            </Grid.Column>
            <Grid.Column width={4} className="transaction__evolution">
                <span className="transaction__status"> <span> status: </span> { props.status } </span>
                <span className="percentage"> {props.percentage}% </span>
                <div className="status" >
                 <div className="progress">
                    <div className="progress__bar" style={{ width: `${props.percentage}%`, backgroundColor: `${props.color}` }}></div>
                </div>
                </div>                               
            </Grid.Column>
        </Grid.Row>      
    )
}

class Articles extends Component {
    static mapStateToProps(state) {
        return {
            items: state.articlesReducer
        }
    }

    renderProductsReview() {
        const { articles } = this.props.items;
        return articles.map(article => {
            return <Products
                mois="Avr"
                date="29/18" 
                src={plane}
                receiver={article.seller}
                type='Transport'
                amountDevise={article.devise}
                amount={article.amount}
                instalment={`${article.nberOfMonth} months`}
                status={article.status}
                key={article._id}
                percentage="50"                                        
                color="#2196F3" 
             />
        })
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
                                <FilterButton imgs={false} name="Completed" />
                                <FilterButton imgs={false} name="Not completed" />
                                <FilterButton imgs={false} name="More options" />
                            </div>

                            <div className="transactions">
                                <h3 className="transactions__title"> Articles </h3>
                                <Grid stackable centered className="main__transaction" >
                                    { this.renderProductsReview() }
                                </Grid>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Layout.MainContent>
            </Layout.LayoutWithSideBar>

        )
    }

}

export default connect(Articles.mapStateToProps)(Articles);



{/* <Products mois="Avr"
date="29/18" 
src={plane}
receiver="Lufthansa"
type="Transport"
amountDevise="$"
amount="500.00"                                        
instalment="5 months"
status="not completed" 
percentage="50"                                        
color="#2196F3" />
<Products mois="Jan"
date="11/18" 
src={shirt}
receiver="Puma"
type="Clothes"
amountDevise="$"
amount="100.00"
instalment="2 months"
status="not completed"
percentage="75"
color="#2196F3" /> */}
{/* les transactions d envois d argents n ont pas de periode time */}
{/* <Products mois="Dec"
date="15/18" 
src={plane}
receiver="Djumper AG"
type="Transport"
amountDevise="$"
amount="75.00"
instalment="7 months"
status="not completed"
percentage="25"
color="#2196F3" />
<Products mois="Sept"
date="30/18" 
src={shirt}
receiver="Adidas"
type="Clothes"
amountDevise="$"
amount="375.00"
instalment="1 month"
status="completd"
percentage="100"                                        
color="#00BCD4" /> */}