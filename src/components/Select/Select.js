import { useState } from 'react';
import ModalDifficulty from '../Modal/Modal-hard';
import cn from 'classnames';
import sprite from '../../icon/sprite.svg';
import styleCard from '../Card/NewCard.module.css';
import style from '../Modal/Modal-hard.module.css';

const Select = ({ options = ['Easy', 'Normal', 'Hard'], difficulty, setDifficulty, type }) => {
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);

  return (
    <div onClick={() => setDifficultyModal(!isDifficultyModalShown)} className={styleCard.difficulty}>
      {isDifficultyModalShown && <ModalDifficulty setDifficulty={setDifficulty} type={type} />}

      <svg
        className={cn(styleCard.iconEllipse, {
          [style.iconEasy]: difficulty === 'Easy',
          [style.iconNormal]: difficulty === 'Normal',
          [style.iconHard]: difficulty === 'Hard',
        })}
      >
        <use href={sprite + '#icon-ellipse'}></use>
      </svg>
      <p className={styleCard.difficulty}>{difficulty}</p>
      <svg className={styleCard.iconPolygon}>
        <use href={sprite + '#icon-polygon'}></use>
      </svg>
    </div>
  );
};
export default Select;
