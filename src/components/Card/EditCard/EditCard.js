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

export default function EditCard({ data, setEdit, type, setType, style }) {
  const dispatch = useDispatch();
  const [isDeleteModalShown, setDeleteModal] = useState(false);
  const [complete, setCompleted] = useState(false);
  const inputTitle = useRef();
  const handleSubmit = (e, { title, difficulty, category, date, time, type, _id }) => {
    e.preventDefault();
    try {
      const body = { title, difficulty, category, date, time, type, _id };
      const id = body._id;
      delete body._id;
      delete body.id;

      if (body.title === '') return inputTitle.current.classList.add(s.titleError);
      dispatch(editCard(id, body));
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={style}
      className={
        type === 'Challenge' && complete === true ? `${s.container} ${s.challenge}` : s.container
      }
    >
      {complete ? (
        <CSSTransition in timeout={300} classNames={cardTransition} appear>
          <Complete data={data} setCompleted={setCompleted} />
        </CSSTransition>
      ) : (
        <BasicCard
          data={data}
          handleSubmit={handleSubmit}
          input={inputTitle}
          type={type}
          setType={setType}
        >
          <div>
            <button className={s.buttonCard} type="submit">
              <svg className={s.buttonSave}>
                <use href={sprite + '#icon-save'}></use>
              </svg>
            </button>
            <button
              className={
                data.status === 'Complete' ? `${s.buttonClose} ${s.complete}` : `${s.buttonClose}`
              }
              type="button"
              onClick={() => setDeleteModal(true)}
            >
              <svg className={s.buttonClear}>
                <use href={sprite + '#icon-clear'}></use>
              </svg>
            </button>
            {data.status === 'Complete' ? null : (
              <button className={s.buttonCard} type="button">
                <svg onClick={() => setCompleted(true)} className={s.buttonDone}>
                  <use href={sprite + '#icon-done'}></use>
                </svg>
              </button>
            )}
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
