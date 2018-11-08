import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridRow, { Container, Grid, Image } from 'semantic-ui-react';

import Layout from '../withSideBarLayout'
import { FilterButton } from '../transactions/transactions'
import { Article } from '../commonComponents/boughtItems'

import Calendar from '@assets/calendar.svg'


class Articles extends Component {
    static mapStateToProps(state) {
        return {
            items: state.articlesReducer
        }
    }

    renderProductsReview() {
        const { articles } = this.props.items;
        return articles.map(article => {
            return <Article
                    page='articles'
                    id={article._id}
                    month="Avr"
                    day="29/18" 
                    seller={article.seller}
                    type='Transport'
                    devise={article.devise}
                    amount={article.amount}
                    rate={`${article.nberOfMonth} months`}
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
                                { this.renderProductsReview() }    
                            </div>

                        </Grid.Column>
                    </Grid>
                </Layout.MainContent>
            </Layout.LayoutWithSideBar>

        )
    }

}

export default connect(Articles.mapStateToProps)(Articles);




