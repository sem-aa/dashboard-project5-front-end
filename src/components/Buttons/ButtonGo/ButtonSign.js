import React from 'react';
import style from './ButtonSign.module.css';

const ButtonSign = ({ handleSignUp, type }) => (
  <button className={style.buttonSign} type={type} onClick={handleSignUp}>
    <h2 className={style.btnText}>go!</h2>
  </button>
);

export default ButtonSign;
