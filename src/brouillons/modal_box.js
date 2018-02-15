import React, { Component } from 'react';
import { Container, Grid, Header, Button, Form, Image} from 'semantic-ui-react'
import { Input, Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import LogIn from '../containers/login'

import {MyModalHeader, MyModalContent, MyModalFooter} from '../reusable/modals';

import close from '../../assets/lnr-cross.svg';



class ModalBox extends Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this)

    }

    closeModal(e) {
        e.stopPropagation()
        const eltClass = e.target.className

        if ( eltClass === "_centerModal" || eltClass === "showModal") {

            this.props.hide()

        }
    }

    render() {

        const modalstate = this.props.show;

        return (

            <div className={modalstate} onClick={this.closeModal} >
                <div className="_centerModal" onClick={this.closeModal} >
                    <div className="_content">
                        <Grid className="_noMargin" stackable centered>

                            {this.props.children}

                        </Grid>
                    </div>
                </div>

            </div>
        );
    }

}

export default ModalBox;

//   {this.props.closeButton && }
/*
                        <Image src={close} width={30} height={30} className="_closeModal"/>

                        <Grid className="_noMargin" stackable centered>

                            <MyModalHeader ModalTitle="Log In" className="myModalTitle"/>

                            <MyModalContent>
                                <LogIn history={this.props.history}/>
                            </MyModalContent>

                            <MyModalFooter>
                                <div className="haventAccount">
                                    <span> Don't you have an account?</span>
                                    <span> <Link to="/signup"> Sign up </Link> </span>
                                </div>
                            </MyModalFooter>



        // constructor navigation.js
        constructor(props) {
        super(props);

        this.state = {
            modalclass: 'hideModal'
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    hideModal() {
        this.setState({ modalclass: 'hideModal'})
    }

    showModal() {
        this.setState({modalclass: 'showModal'})
    }

                <Modal show={this.state.modalclass} hide={this.hideModal}>

                <MyModalHeader ModalTitle="Log In" className="myModalTitle"/>

                <MyModalContent>
                    <LogIn/>
                </MyModalContent>

                <MyModalFooter>
                    <div className="haventAccount">
                        <span> Don't you have an account?</span>
                        <span> <Link to="/signup"> Sign up </Link> </span>
                    </div>
                </MyModalFooter>

            </Modal>



 */