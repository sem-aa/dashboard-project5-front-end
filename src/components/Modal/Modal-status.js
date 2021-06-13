import React from 'react';
import s from './Modal-status.module.css';

const ModalStatus = ({ getValue, type }) => {
  const categories = ['Family', 'Health', 'Learning', 'Leisure', 'Stuff', 'Work'];

  return (
    <div className={type === 'Challenge' ? `${s.modal} ${s.challenge}` : `${s.modal}`}>
      <ul className={s.list}>
        {categories.map(category => (
          <li
            className={
              type === 'Challenge' ? `${s.modalContent} ${s.challengeText}` : `${s.modalContent}`
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
