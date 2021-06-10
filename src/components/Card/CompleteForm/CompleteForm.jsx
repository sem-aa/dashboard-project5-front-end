import React from 'react';
import sprite from '../../../icon/sprite.svg';
import s from './CompleteForm.module.css'

export default function CompleteForm({ title }) {
  return (
    <section className={s.completed}>
      <div className={s.completedHeader}>
        <h2 className={s.statusCompleted}>completed:</h2>
        <p className={s.completedTitle}>{title}</p>
      </div>
      <svg className={s.award}>
        <use href={sprite + '#icon-award'}></use>
      </svg>
      <div className={s.completedFooter}>
        <p>Continue</p>
        <button
          className={s.buttonCard}
          onClick={() => {
            console.log('goto page "Done" ');
          }}
        >
          <svg className={s.arrow}>
            <use href={sprite + '#icon-arrow'}></use>
          </svg>
        </button>
      </div>
    </section>
  )
}