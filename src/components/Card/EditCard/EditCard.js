import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import cardTransition from './card.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import Complete from '../CompleteForm';
import BasicCard from '../BasicCard';
import { editCard } from '../../../redux/operations/cardOperations';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';

export default function EditCard({ data, setEdit, type, setType }) {
  const dispatch = useDispatch();
  const [isDeleteModalShown, setDeleteModal] = useState(false);
  const [complete, setCompleted] = useState(false);
  const inputTitle = useRef();

  const handleSubmit = (e, localData) => {
    e.preventDefault();

    try {
      const body = { ...data, ...localData };
      const id = body._id;
      delete body._id;
      delete body.status;

      if (body.title === '') return inputTitle.current.classList.add(s.titleError);

      dispatch(editCard(id, body));
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      // style={style}
      className={
        type === 'Challenge' && complete === true ? `${s.container} ${s.challenge}` : s.container
      }
    >
      {complete ? (
        <CSSTransition in timeout={300} classNames={cardTransition} appear>
          <Complete data={data} type={type} />
        </CSSTransition>
      ) : (
        <BasicCard
          data={data}
          type={type}
          setType={setType}
          handleSubmit={handleSubmit}
          input={inputTitle}
        >
          <div>
            <button className={s.buttonCard} type="submit">
              <svg className={s.buttonSave}>
                <use href={sprite + '#icon-save'}></use>
              </svg>
            </button>
            <button className={s.buttonClose} type="button" onClick={() => setDeleteModal(true)}>
              <svg className={s.buttonClear}>
                <use href={sprite + '#icon-clear'}></use>
              </svg>
            </button>
            <button className={s.buttonCard} type="button">
              <svg onClick={() => setCompleted(true)} className={s.buttonDone}>
                <use href={sprite + '#icon-done'}></use>
              </svg>
            </button>
          </div>
        </BasicCard>
      )}
      {isDeleteModalShown && (
        <ModalDelete
          onClose={() => setDeleteModal(false)}
          type={type}
          id={data._id}
          isEdit
        ></ModalDelete>
      )}
    </div>
  );
}
