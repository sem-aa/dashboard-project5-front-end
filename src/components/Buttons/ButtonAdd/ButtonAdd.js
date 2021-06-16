import cn from 'classnames';
import style from './ButtonAdd.module.css';
import sprite from '../../../icon/sprite.svg';

export default function ButtonAdd({ handleClick, className }) {
  return (
    <button className={cn(style.btn, className)} onClick={handleClick}>
      <svg className={style.icon}>
        <use href={sprite + '#icon-plus'}></use>
      </svg>
    </button>
  );
}
