import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal-delete.module.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/operations/cardOperations';

export default function ModalDelete({ onClose, type, id, deleteNewCard }) {
  const dispatch = useDispatch();
  const onDeleteCard = id => dispatch(deleteCard(id));

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <h1 className={s.title}>Delete this {type}?</h1>
        <div className={s.buttonsWrap}>
          <button onClick={onClose} className={s.buttonCancel}>
            Cancel
          </button>
          {/* <button onClick={() => onDeleteCard(id)} className={s.button + ' ' + s.buttonDelete}>
            Delete
          </button> */}
          <button onClick={deleteNewCard()} className={s.button + ' ' + s.buttonDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func,
};
