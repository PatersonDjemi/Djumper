import React, {Component} from 'react';
import GridColumn, { Container, Grid, Image } from 'semantic-ui-react'

import {ModalBox} from '@reusable/modal'


class NotifAndMsg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotification: true,
            showMessage: false
        }

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

    render() {
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
                                <div className="notification"
                                        onClick={this.myNotifications}>
                                        Notifications (15)
                                    </div> 
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={8} className="noPaddingLeftRigth">
                                    <div className="message"
                                        onClick={this.myMessages}>
                                        Messages (15)
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="no__padding__top" >
                                <Grid.Column className="noPaddingLeftRigth">
                                    <div className="notifBlock">
                                        {/* <div className="notifBlock__source">
                                            photo here
                                        </div> */}
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
                                            {/* <div> Today at 23:32 </div> */}
                                        </div>
                                    </div>
                                    <div className="notifBlock">
                                        {/* <div className="notifBlock__source">
                                            photo here
                                        </div> */}
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
                                            {/* <div> Today at 23:32 </div> */}
                                        </div>
                                    </div>
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