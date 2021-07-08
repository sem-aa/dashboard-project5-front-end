import sprite from '../../icon/sprite.svg';
import style from './NewCard.module.css';
import { colorDifficult, colorCategory, getDayName, getMonthDay } from '../../helper/helper';

export default function Card({ data, type, isDoneSection }) {
  return (
    <div
      className={type === 'Challenge' ? `${style.container} ${style.challenge}` : style.container}
    >
      <form className={style.formCard}>
        <div className={style.head}>
          <div className={style.difficulty}>
            <svg className={style.iconEllipse}>
              <use fill={colorDifficult(data.difficulty)} href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={style.difficulty}>{data.difficulty}</p>
          </div>
          {type === 'Task' ? (
            <div className={style.iconContainer}>
              <svg className={style.iconTask}>
                <use href={sprite + '#icon-star'}></use>
              </svg>
            </div>
          ) : (
            <div className={style.iconContainer}>
              <svg className={style.iconTrophy}>
                <use href={sprite + '#icon-trophy'}></use>
              </svg>
            </div>
          )}
        </div>
        <div className={style.main}>
          {type === 'Challenge' ? <h2 className={style.challengeLabel}>Challenge</h2> : null}
          <h2
            className={
              type === 'Challenge' ? `${style.title} ${style.challengeTitle}` : style.title
            }
          >
            {data.title}
          </h2>
          <p className={style.date}>
            {isDoneSection
              ? getMonthDay(data.date, type) + ', ' + data.time
              : getDayName(data.date, type) + ', ' + data.time}
          </p>
        </div>
        <div className={style.foot}>
          <div>
            <p className={style.category} style={{ backgroundColor: colorCategory(data.category) }}>
              {data.category}
            </p>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}
