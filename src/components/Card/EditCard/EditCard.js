import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import cardTransition from './card.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import Complete from '../CompleteForm';
import BasicCard from '../BasicCard';
import { editCard, incompleteCard } from '../../../redux/operations/cardOperations';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';

export default function EditCard({ data, setEdit, type, setType, style, setIsBackDrop }) {
  const dispatch = useDispatch();
  const inputTitle = useRef();
  const [isDeleteModalShown, setDeleteModal] = useState(false);
  const [complete, setCompleted] = useState(false);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    const { title, difficulty, category, date, time, type, _id } = data;

    try {
      const body = { title, difficulty, category, date, time, type, _id };
      const id = body._id;
      delete body._id;
      delete body.id;

      if (body.title === '') return inputTitle.current.classList.add(s.titleError);

      dispatch(editCard(id, body));
      setIsBackDrop(false);
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDone = () => {
    setCompleted(true);
    setIsBackDrop(false);
  };

  return (
    <div
      style={style}
      className={type === 'Challenge' && complete ? `${s.container} ${s.challenge}` : s.container}
    >
      {complete ? (
        <CSSTransition in timeout={300} classNames={cardTransition} appear>
          <Complete data={data} setCompleted={setCompleted} setIsBackDrop={setIsBackDrop} />
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
            {data.status === 'Complete' ? (
              <button
                onClick={() => dispatch(incompleteCard(data._id))}
                className={s.buttonCard}
                type="button"
              >
                <svg className={s.buttonDone}>
                  <use href={sprite + '#icon-back'}></use>
                </svg>
              </button>
            ) : (
              <button onClick={handleDone} className={s.buttonCard} type="button">
                <svg className={s.buttonDone}>
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
