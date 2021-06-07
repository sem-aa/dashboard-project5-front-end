import cn from 'classnames';
import s from './ButtonAdd.module.css';
import sprite from '../../../icon/sprite.svg';

export default function ButtonAdd({ handleClick, className }) {
  return (
    <button className={cn(s.btn, className)} onClick={handleClick}>
      <svg className={s.icon}>
        <use href={sprite + '#icon-plus'}></use>
      </svg>
    </button>
  );
}
