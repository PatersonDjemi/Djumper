import React, {Component} from 'react'
import Divider from 'semantic-ui-react';
import ReactDom from 'react-dom'

const modal_root = document.getElementById('modal_root');

class ModalBox extends Component {
    constructor(props) {
        super(props);

       this.el = document.createElement('div');
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
            <div  className="modal_div">
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
            <ModalBox>
                <ModalContent>
                    Here content of the modal.!
                </ModalContent>
            </ModalBox>
        );
    }
}


export default Modal;