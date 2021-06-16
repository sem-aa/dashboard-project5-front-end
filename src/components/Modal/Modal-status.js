import React from 'react';
import style from './Modal-status.module.css';

const ModalStatus = ({ getValue, type }) => {
  const categories = ['Family', 'Health', 'Learning', 'Leisure', 'Stuff', 'Work'];

  return (
    <div className={type === 'Challenge' ? `${style.modal} ${style.challenge}` : `${style.modal}`}>
      <ul className={style.list}>
        {categories.map(category => (
          <li
            className={
              type === 'Challenge' ? `${style.modalContent} ${style.challengeText}` : `${style.modalContent}`
            }
            key={category}
            onClick={() => getValue(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalStatus;
