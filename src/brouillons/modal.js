import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MyStore } from '../index';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

import ModalBox from './modal_box'

class Modal extends Component {

    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'mymodal'
        document.body.appendChild(this.modalTarget);
        this.renderModal();
    }

    componentDidUpdate() {
        this.renderModal()
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    renderModal() {
        ReactDOM.render(
            <Provider store={MyStore}>
                <Router>
                    <ModalBox show={this.props.show} hide={this.props.hide}>
                        {this.props.children}
                    </ModalBox>
                </Router>
            </Provider>,
                this.modalTarget
        )
    }

    render() {
        return null ;
    }
}

export default Modal;