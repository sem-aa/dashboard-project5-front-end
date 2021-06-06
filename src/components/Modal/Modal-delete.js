import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal-delete.module.css';

const modalRoot = document.querySelector('#modal-delete-root');
export default class ModalDelete extends Component {
  // static propTypes = {
  //   onClose: PropTypes.func,
  // };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }
  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };
  // handleBackdropClick = e => {
  //   if (e.target === e.currentTarget) {
  //     this.props.onClose();
  //   }
  // };
  render() {
    return createPortal(
      <div
        className={s.overlay}
        // onClick={this.handleBackdropClick}
      >
        <div className={s.modal}>
          <h1 className={s.title}>Delete this Quest?</h1>
          <div className={s.buttonsWrap}>
            <button className={s.button + ' ' + s.buttonCancel}>Cancel</button>
            <button className={s.button + ' ' + s.buttonDelete}>Delete</button>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}
