import React from 'react';
import s from './ButtonGo.module.css';

const ButtonGo = ({ handleLogIn, type }) => (
  <button className={s.buttonGo} type={type} onClick={handleLogIn}>
    <h2 className={s.btnText}>log</h2>
  </button>
);

export default ButtonGo;
