import React, {Component} from 'react';
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Segment, Icon } from 'semantic-ui-react';

class NextMonthOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        }

        this.toggleNextMonth = this.toggleNextMonth.bind(this);
    }

    static mapStateToProps({ratePlan}) {
        return {ratePlan}
    }

    toggleNextMonth(e) {
        console.log("i was click to toggle");
        e.stopPropagation();
        this.setState({ showAll: !this.state.showAll});
    }

    render() {
        const {ratePlan} = this.props;
        const ratePlanExist = Object.keys(ratePlan).length !== 0 ? true : false;
        return (
            <div style={{marginBottom: 1 + 'rem'}}>
                <div className="text__see__next">
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr
                    nvidunt ut labore et dolore magna aliquyam erat
                   <span className="up__down__see"
                    onClick={this.toggleNextMonth}>
                        <Icon name={this.state.showAll ? "chevron up" : "chevron down" } size="large" /> 
                   </span> 
                </div>
                { this.state.showAll && 
                    <Segment size="huge" className="see__next__month"> 
                        <div className="see__next__amount">
                            <Icon name="star" size="big"></Icon>
                            <div className="next__text "> Next month </div> 
                            <div className="next__amount "> 
                                <span> { ratePlanExist ? ratePlan.nextPayment : "0.00" } </span>
                                <span> { ratePlanExist ? ratePlan.devise : "EUR" } </span>
                            </div>
                        </div> 
                    </Segment> 
                }
            </div>
        );
    }
}

NextMonthOverview.propTypes = {
    ratePlan: propTypes.object.isRequired
}

export default connect(NextMonthOverview.mapStateToProps)(NextMonthOverview);
