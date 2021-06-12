import { useState } from 'react';
import ModalDifficulty from '../Modal/Modal-hard';
import cn from 'classnames';
import sprite from '../../icon/sprite.svg';
import s from '../Card/NewCard.module.css';
import style from '../Modal/Modal-hard.module.css';

const Select = ({ options = ['Easy', 'Normal', 'Hard'], setDifficulty }) => {
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);
  const [selected, setSelected] = useState(options[1]);

  const handleClick = value => {
    setSelected(value);
  };
  return (
    <div onClick={() => setDifficultyModal(!isDifficultyModalShown)} className={s.difficulty}>
      {isDifficultyModalShown && (
        <ModalDifficulty setDifficulty={setDifficulty} handleClick={value => handleClick(value)} />
      )}
      <svg
        className={cn(s.iconEllipse, {
          [style.iconEasy]: selected === 'Easy',
          [style.iconNormal]: selected === 'Normal',
          [style.iconHard]: selected === 'Hard',
        })}
      >
        <use href={sprite + '#icon-ellipse'}></use>
      </svg>
      <p className={s.difficulty}>{selected}</p>
      <svg className={s.iconPolygon}>
        <use href={sprite + '#icon-polygon'}></use>
      </svg>
    </div>
  );
};
export default Select;
