import { useState } from 'react';
import s from '../Card/NewCard.module.css';
// import s from './Select.module.css';
import ModalDifficulty from '../Modal/Modal-hard';
import sprite from '../../icon/sprite.svg';

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
      <svg className={s.iconEllipse}>
        <use href={sprite + '#icon-ellipse'}></use>
      </svg>
      <p className={s.difficulty}>{selected}</p>
      <svg className={s.iconPolygon}>
        <use href={sprite + '#icon-polygon'}></use>
      </svg>

      {/* <select style={{ opacity: 0, pointerEvents: 'none', position: 'absolute' }}>
        {options &&
          options.map(el => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
      </select> */}
    </div>
  );
};
export default Select;
