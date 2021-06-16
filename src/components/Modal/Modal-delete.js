import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Modal-delete.module.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/operations/cardOperations';

export default function ModalDelete({ onClose, type, id, isCreate, isEdit, deleteNewCard }) {
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
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <h1 className={style.title}>Delete this {type === 'Task' ? 'Quest' : 'Challenge'}?</h1>
        <div className={style.buttonsWrap}>
          <button onClick={onClose} className={style.buttonCancel}>
            Cancel
          </button>
          {isEdit && (
            <button onClick={() => onDeleteCard(id)} className={style.button + ' ' + style.buttonDelete}>
              Delete
            </button>
          )}
          {isCreate && (
            <button onClick={() => deleteNewCard()} className={style.button + ' ' + style.buttonDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func,
};
