import React, {Component} from 'react';
import GridColumn, { Container, Grid, Image } from 'semantic-ui-react'

import {ModalBox} from '@reusable/modal'
import {notifOrMsg} from '@components/notifAndMsg/notifOrMsg';

const Notification = notifOrMsg();
const Message = notifOrMsg(true);

class NotifAndMsg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotification: true,
            showMessage: false
        }

        this.borderColor = this.borderColor.bind(this);
        this.myNotifications = this.myNotifications.bind(this);
        this.myMessages = this.myMessages.bind(this);
        this.modalBoxClose = this.modalBoxClose.bind(this);
    }

    myNotifications(event) {
        event.stopPropagation();
        if(!this.state.showNotification) {
            return this.setState({showNotification: true, showMessage: false})
        }
        return;
    }

    myMessages(event) {
        event.stopPropagation();
        if (!this.state.showMessage) {
           return this.setState({showNotification: false, showMessage: true})
        }
        return;
    }

    modalBoxClose(event) {
        if (event.target.id === 'modal_div') {
           return this.props.hideNotifAndMsg();
        }
        // this function wird immer angerufen à chaque click, weiss nicht warum
    }

    borderColor(propOfState, defaultClass) {
        if (propOfState) {
            return `${defaultClass} pinkBorder`;
        }
        return `${defaultClass} greyBorder`;
    }

    render() {
        const { showMessage, showNotification } = this.state;
        return (
            <ModalBox closeModalBox={this.modalBoxClose}>
                <div className="notif__msg" onClick={this.test}>
                    <Container fluid>
                        <Grid stackable className="gird__notif__message" >
                            <Grid.Row>
                                <Grid.Column className="all__news">
                                    <span>all your news</span> 
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="no__padding__bottom">
                                <Grid.Column textAlign="center" width={8} className="noPaddingLeftRigth" >
                                    <div className={this.borderColor(showNotification, "notification")}
                                        onClick={this.myNotifications}>
                                        Notifications (15)
                                    </div> 
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={8} className="noPaddingLeftRigth">
                                    <div className={this.borderColor(showMessage, 'message')}
                                        onClick={this.myMessages}>
                                        Messages (15)
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="no__padding__top" >
                                <Grid.Column className="noPaddingLeftRigth">
                                    { showNotification && (
                                        <div>
                                            <Notification
                                                from="Hassan Paterson"
                                                when="3 hours ago"
                                                title="Payement confirmation"
                                                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod temp"
                                            />
                                                <Notification
                                                from="Rebecca Hanke"
                                                when="Yesterday"
                                                title="Bisous bisous"
                                                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod temp"
                                            />
                                            <Notification
                                                from="Martin Pop"
                                                when="1 week ago"
                                                title="Talk room"
                                                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod temt"
                                            />
                                        </div>
                                    )}

                                    { showMessage && (
                                        <div>
                                            <Message
                                                from="Hassan Paterson"
                                                when="2 days ago"
                                                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tem"
                                            />
                                            <Message
                                                from="Martin Pop"
                                                when="1 week ago"
                                                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tem"
                                            />
                                        </div>
                                    )}

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>            
            </ModalBox>

        )
    }
}

export default NotifAndMsg;


{/* <div className="notifBlock">
<div className="notifBlock__source">
    photo here
</div>
<div className="notifBlock__content">
    <div className="notifBlock__content__header">
        <div className="notifBlock__content__from"> Hassan Paterson </div>
        <div className="notif__time"> 3 min ago </div>
    </div>
    <div className="notifBlock__content__title"> Payment confirmation </div>
    <div className="notifBlock__content__text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. <span className="show_more_less"> Show more </span>
    </div>
</div>
</div> */}