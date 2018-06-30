import React, {Component} from 'react'
import Divider from 'semantic-ui-react';
import ReactDom from 'react-dom'

const modal_root = document.getElementById('modal_root');
let modalCard = document.createElement('div');
modalCard.id = 'modal_div'


export class ModalBox extends Component {
    constructor(props) {
        super(props);

       this.el = modalCard;
    }

    componentDidMount() {
        modal_root.appendChild(this.el)
    }

    componentWillUnmount() {
        modal_root.removeChild(this.el)
    }

    render() {

        return ReactDom.createPortal(
            this.props.children,
            this.el
        )

    }

}



class ModalContent extends Component {

    render() {
        return (
            <ModalBox>

                <div className="modal_box">
                    <h3 className="modal__header">
                        the header
                    </h3>
                    <div className="modal__body">
                        { this.props.children }
                    </div>
                    <div className="modal__footer">
                        <span className="modal__cancel modal__btn"> cancel </span>
                        <span className="modal__submit modal__btn"> submit </span>
                    </div>
                </div>

            </ModalBox>

        );
    }

}

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ModalContent>

            </ModalContent>
        );
    }
}


export default Modal;