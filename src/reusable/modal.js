import React, {Component} from 'react'
import ReactDom from 'react-dom'

const modal_root = document.getElementById('modal_root');
let target = document.createElement('div');

const ModalContent = (props) => {
    return (
        <div id="modal_div" style={{ backgroundColor: `${props.backgroung}`}}>
            {props.children}
        </div>
    )
}

ModalContent.defaultProps = {
    backgroundColor: '#ffffff'
}

class ModalBox extends Component {
    constructor(props) {
        super(props);

       this.el = target;
       this.divRef = React.createRef();
    }

    componentDidMount() {
        modal_root.appendChild(this.el);
        this.el.addEventListener('click', this.props.closeModalBox);
    }

    componentWillUnmount() {
        modal_root.removeChild(this.el)
        this.el.removeEventListener('click', this.props.closeModalBox);
    }

    render() {
        return ReactDom.createPortal(
            <ModalContent>
                {this.props.children}
            </ModalContent>,
            this.el
        )
    }

}

export default ModalBox;



// class ModalContent extends Component {

//     render() {
//         return (
//             <ModalBox>

//                 <div className="modal_box">
//                     <h3 className="modal__header">
//                         the header
//                     </h3>
//                     <div className="modal__body">
//                         { this.props.children }
//                     </div>
//                     <div className="modal__footer">
//                         <span className="modal__cancel modal__btn"> cancel </span>
//                         <span className="modal__submit modal__btn"> submit </span>
//                     </div>
//                 </div>

//             </ModalBox>

//         );
//     }

// }

// class Modal extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <ModalContent>

//             </ModalContent>
//         );
//     }
// }


// export default Modal;