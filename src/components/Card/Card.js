import React, { useState } from 'react';
import sprite from '../../icon/sprite.svg';
import s from './NewCard.module.css';
import { colorDifficult, colorCategory } from '../../helper/helper';

export default function Card({ data }) {
  const [task, setTask] = useState('Quest');

  return (
    <div className={task === 'Challenge' ? `${s.container} ${s.challenge}` : s.container}>
      <form className={s.formCard}>
        <div className={s.head}>
          <div className={s.difficulty}>
            <svg className={s.iconEllipse}>
              <use fill={colorDifficult(data.difficulty)} href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={s.difficulty}>{data.difficulty}</p>
          </div>
          {task === 'Quest' ? (
            <div className={s.iconContainer} onClick={() => setTask('Challenge')}>
              <svg className={s.iconTask}>
                <use href={sprite + '#icon-star'}></use>
              </svg>
            </div>
          ) : (
            <div className={s.iconContainer} onClick={() => setTask('Quest')}>
              <svg className={s.iconTrophy}>
                <use x="-4" y="2" href={sprite + '#icon-trophy'}></use>
              </svg>
            </div>
          )}
        </div>
        <div className={s.main}>
          {task === 'Challenge' ? <h2 className={s.challengeLabel}>Challenge</h2> : null}
          <h2 className={task === 'Challenge' ? `${s.title} ${s.challengeTitle}` : s.title}>
            {data.title}
          </h2>
          <p className={s.date}>
            {task === 'Challenge' ? `by ${data.date} ${data.time}` : `${data.date} ${data.time}`}
          </p>
        </div>
        <div className={s.foot}>
          <div>
            <p className={s.category} style={{ backgroundColor: colorCategory(data.category) }}>
              {data.category}
            </p>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}
