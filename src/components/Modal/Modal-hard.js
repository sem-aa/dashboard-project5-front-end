import React from 'react';
import s from './Modal-hard.module.css';
import sprite from '../../icon/sprite.svg';

const ModalHard = task => {
  return (
    <div className={task.task === 'Challenge' ? `${s.modal} ${s.challenge}` : s.modal}>
      <ul>
        <li className={s.modalContent}>
          <svg className={s.iconEasy}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Easy
        </li>
        <li className={s.modalContent}>
          <svg className={s.iconNormal}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Normal
        </li>
        <li className={s.modalContent}>
          <svg className={s.iconHard}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Hard
        </li>
      </ul>
    </div>
  );
};

export default ModalHard;
