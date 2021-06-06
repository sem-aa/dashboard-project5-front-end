import React from 'react';
import s from './Challenge.module.css';
import sprite from '../../icon/sprite.svg'


export default function Card() {
  return (
    <>
      <div className={s.challenge}>
        <div className={s.header}>
          <div className={s.difficulty}>
            <svg className={s.colorDifficulty}>
              <use href={sprite + "#icon-ellipse"}></use>
            </svg>
            <p className={s.dif}>Easy</p>
            <svg className={s.poligon}>
              <use href={sprite + "#icon-polygon"}></use>
            </svg>
          </div>
          <svg className={s.iconTrophy}>
          <use href={sprite + "#icon-trophy"}></use>
          </svg>
        </div>

        <div className={s.editChallenge}>
          <h2>edit Challenge</h2>
        </div>
        <h2 className={s.title}>
          Book a table at th ghkuhuliy
        </h2>
          {/* <svg className={s.colorDifficulty}> */}
          {/* <use href={sprite + "#icon-calendar"}></use> */}
          {/* </svg> */}
          <div className={s.date}>
            <p>by Wednesday</p>
            <p>,  23.00</p>
          </div>

        <div className={s.correction}>
          <div className={s.category}>
            <p className={s.categoryText}>family</p>
             <svg className={s.catPoligon}>
              <use href={sprite + "#icon-polygon"}></use>
            </svg>
          </div>
          <div className={s.red}>
             <svg className={s.iconSave}>
              <use href={sprite + "#icon-save"}></use>
            </svg>
             <svg className={s.iconClear}>
              <use href={sprite + "#icon-clear"}></use>
            </svg>
             <svg className={s.iconDone}>
              <use href={sprite + "#icon-done"}></use>
            </svg>
          </div>
        </div>
          
      </div>
      </>
    )
}
  