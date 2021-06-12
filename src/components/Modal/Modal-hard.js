import React from 'react';
import s from './Modal-hard.module.css';
import sprite from '../../icon/sprite.svg';

const ModalHard = ({ handleClick, setDifficulty, type }) => {
  return (
    <div className={type === 'Challenge' ? `${s.modal} ${s.challenge}` : s.modal}>
      <ul>
        <li
          onClick={() => {
            setDifficulty('Easy');
            handleClick('Easy');
          }}
          className={s.modalContent}
        >
          <svg className={s.iconEasy}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Easy
        </li>
        <li
          onClick={() => {
            setDifficulty('Normal');
            handleClick('Normal');
          }}
          className={s.modalContent}
        >
          <svg className={s.iconNormal}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Normal
        </li>
        <li
          onClick={() => {
            setDifficulty('Hard');
            handleClick('Hard');
          }}
          className={s.modalContent}
        >
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
