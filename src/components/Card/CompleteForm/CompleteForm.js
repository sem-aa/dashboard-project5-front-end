import React from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../../icon/sprite.svg';
import style from './CompleteForm.module.css';
import { completeCard } from '../../../redux/operations/cardOperations';

export default function CompleteForm({ data, setCompleted, setIsBackDrop }) {
  const dispatch = useDispatch();

  const continueBtnHandler = data => {
    dispatch(completeCard(data._id));
  };

  return (
    <section
      className={
        data.type === 'Challenge' ? `${style.completed} ${style.challenge}` : `${style.completed}`
      }
    >
      <div className={style.completedHeader}>
        <h2
          className={
            data.type === 'Challenge'
              ? `${style.statusCompleted} ${style.challenge}`
              : `${style.statusCompleted}`
          }
        >
          completed:
        </h2>
        <p
          className={style.completedTitle}
          onClick={() => {
            setCompleted(false);
            setIsBackDrop(true);
          }}
        >
          {data.title}
        </p>
      </div>
      <svg className={style.award}>
        {data.type === 'Challenge' ? (
          <use href={sprite + '#icon-cup'}></use>
        ) : (
          <use href={sprite + '#icon-award'}></use>
        )}
      </svg>
      <div className={style.completedFooter}>
        <button
          type="button"
          className={style.buttonCard}
          onClick={() => {
            continueBtnHandler(data);
          }}
        >
          <span className={style.btnText}>Continue</span>
          <svg className={style.arrow}>
            <use href={sprite + '#icon-arrow'}></use>
          </svg>
        </button>
      </div>
    </section>
  );
}
