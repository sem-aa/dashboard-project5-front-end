
import sprite from '../icon/sprite.svg'
import s from './svg.module.css'
import CreateCard from '../components/Card/EditCard/EditCard'

export default function TestSvg() {
  return (
    <>
      <CreateCard />
      <svg>
        <use className={s.icon} width="14px" height="14px"
          href={sprite + "#icon-done"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-save"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-arrow"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-go"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-fire"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-plus"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-star"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-clear"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-calendar"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-trophy"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-polygon"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-ellipse"}></use>
      </svg>

      <svg>
        <use className={s.icon}
          href={sprite + "#icon-logout"}></use>
      </svg>
    </>
  );

}
