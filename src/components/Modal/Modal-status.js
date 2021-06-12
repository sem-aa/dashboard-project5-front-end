import React from 'react';
import s from './Modal-status.module.css';

const ModalStatus = ({ getValue }) => {
  const categories = ['Family', 'Health', 'Learning', 'Leisure', 'Stuff', 'Work'];

  return (
    <div className={s.modal}>
      <ul className={s.list}>
        {categories.map(category => (
          <li className={s.modalContent} key={category} onClick={() => getValue(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalStatus;
