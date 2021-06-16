import React from 'react';
import style from './Challenge.module.css';
import sprite from '../../icon/sprite.svg'


export default function Card() {
  return (
    <>
      <div className={style.challenge}>
        <div className={style.header}>
          <div className={style.difficulty}>
            <svg className={style.colorDifficulty}>
              <use href={sprite + "#icon-ellipse"}></use>
            </svg>
            <p className={style.dif}>Easy</p>
            <svg className={style.poligon}>
              <use href={sprite + "#icon-polygon"}></use>
            </svg>
          </div>
          <svg className={style.iconTrophy}>
            <use href={sprite + "#icon-trophy"}></use>
          </svg>
        </div>

        <div className={style.editChallenge}>
          <h2>edit Challenge</h2>
        </div>
        <h2 className={style.title}>
          Book a table at th ghkuhuliy
        </h2>
        <div className={style.date}>
          <p>by Wednesday</p>
          <p>,  23.00</p>
        </div>

        <div className={style.correction}>
          <div className={style.category}>
            <p className={style.categoryText}>family</p>
            <svg className={style.catPoligon}>
              <use href={sprite + "#icon-polygon"}></use>
            </svg>
          </div>
          <div className={style.red}>
            <svg className={style.iconSave}>
              <use href={sprite + "#icon-save"}></use>
            </svg>
            <svg className={style.iconClear}>
              <use href={sprite + "#icon-clear"}></use>
            </svg>
            <svg className={style.iconDone}>
              <use href={sprite + "#icon-done"}></use>
            </svg>
          </div>
        </div>

      </div>
    </>
  )
}
