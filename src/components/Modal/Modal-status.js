import React from 'react';
import s from './Modal-status.module.css';

const ModalStatus = ({ getValue }) => {

  const handleChange = e => {
    const value = e.target.textContent;
    getValue(value);
  };
  return (
    <div className={s.modal}>
      <ul className={s.list} onClick={handleChange}>
        <li className={s.modalContent}>STUFF</li>
        <li className={s.modalContent}>FAMILY</li>
        <li className={s.modalContent}>HEALTH</li>
        <li className={s.modalContent}>LEARNING</li>
        <li className={s.modalContent}>LEISURE</li>
        <li className={s.modalContent}>WORK</li>
      </ul>
    </div>
  );
};

export default ModalStatus;
