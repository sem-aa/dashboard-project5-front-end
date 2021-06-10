import React from 'react';
import { useDispatch } from 'react-redux'
import sprite from '../../../icon/sprite.svg'
import s from './CompleteForm.module.css'
import { completeCard } from '../../../redux/operations/cardOperations'

export default function CompleteForm({ data }) {

  const dispatch = useDispatch();

  const continueBtnHandler = data => {
    dispatch(completeCard(data._id));
  };

  return (
    <section className={s.completed}>
      <div className={s.completedHeader}>
        <h2 className={s.statusCompleted}>completed:</h2>
        <p>{data.title}</p>
      </div>
      <svg className={s.award}>
        <use href={sprite + '#icon-award'}></use>
      </svg>
      <div className={s.completedFooter}>
        <button
          type="button"
          className={s.buttonCard}
          onClick={() => {
            continueBtnHandler(data);
          }}
        >
          <span className={s.btnText}>Continue</span>
          <svg className={s.arrow}>
            <use href={sprite + '#icon-arrow'}></use>
          </svg>
        </button>
      </div>
    </section>
  )
}