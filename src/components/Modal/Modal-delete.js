import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal-delete.module.css';

export default class ModalDelete extends Component {
  static propTypes = {
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <h1 className={s.title}>Delete this {this.props.type}?</h1>
          <div className={s.buttonsWrap}>
            <button type="button" onClick={this.props.onClose} className={s.buttonCancel}>
              Cancel
            </button>
            <button
              type="button"
              onClick={this.props.onDelete}
              className={s.button + ' ' + s.buttonDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
