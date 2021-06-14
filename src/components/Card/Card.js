import sprite from '../../icon/sprite.svg';
import s from './NewCard.module.css';
import { colorDifficult, colorCategory } from '../../helper/helper';

export default function Card({ data }) {
  return (
    <div className={data.type === 'Challenge' ? `${s.container} ${s.challenge}` : s.container}>
      <form className={s.formCard}>
        <div className={s.head}>
          <div className={s.difficulty}>
            <svg className={s.iconEllipse}>
              <use fill={colorDifficult(data.difficulty)} href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={s.difficulty}>{data.difficulty}</p>
          </div>
          {data.type === 'Task' ? (
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
          {data.type === 'Challenge' ? <h2 className={s.challengeLabel}>Challenge</h2> : null}
          <h2 className={data.type === 'Challenge' ? `${s.title} ${s.challengeTitle}` : s.title}>
            {data.title}
          </h2>
          <p className={s.date}>
            {data.type === 'Challenge'
              ? `by ${data.date} ${data.time}`
              : `${data.date} ${data.time}`}
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
