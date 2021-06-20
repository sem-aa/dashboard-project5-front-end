import React from 'react';
import style from './ButtonGo.module.css';

const ButtonSign = ({ handleSignUp, type }) => (
  <button className={style.buttonGo} type={type} onClick={handleSignUp}>
    <h2 className={style.btnText}>reg</h2>
  </button>
);

export default ButtonSign;
