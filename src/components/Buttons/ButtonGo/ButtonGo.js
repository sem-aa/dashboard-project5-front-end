import React from 'react';
import style from './ButtonGo.module.css';

const ButtonGo = ({ handleLogIn, type }) => (
  <button className={style.buttonGo} type={type} onClick={handleLogIn}>
    <h2 className={style.btnText}>go!</h2>
  </button>
);

export default ButtonGo;
