import sprite from '../../icon/sprite.svg';
import s from './NewCard.module.css';
import { colorDifficult, colorCategory, getDayName, getMonth } from '../../helper/helper';

export default function Card({ data, type, isDoneSection }) {
  return (
    <div className={type === 'Challenge' ? `${s.container} ${s.challenge}` : s.container}>
      <form className={s.formCard}>
        <div className={s.head}>
          <div className={s.difficulty}>
            <svg className={s.iconEllipse}>
              <use fill={colorDifficult(data.difficulty)} href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={s.difficulty}>{data.difficulty}</p>
          </div>
          {type === 'Task' ? (
            <div className={s.iconContainer}>
              <svg className={s.iconTask}>
                <use href={sprite + '#icon-star'}></use>
              </svg>
            </div>
          ) : (
            <div className={s.iconContainer}>
              <svg className={s.iconTrophy}>
                <use href={sprite + '#icon-trophy'}></use>
              </svg>
            </div>
          )}
        </div>
        <div className={s.main}>
          {type === 'Challenge' ? <h2 className={s.challengeLabel}>Challenge</h2> : null}
          <h2 className={type === 'Challenge' ? `${s.title} ${s.challengeTitle}` : s.title}>
            {data.title}
          </h2>
          <p className={s.date}>
            {isDoneSection
              ? getMonth(data.date, type) + ', ' + data.time
              : getDayName(data.date, type) + ', ' + data.time}
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
