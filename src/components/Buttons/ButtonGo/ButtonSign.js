import React from 'react';
import s from './ButtonSign.module.css';

const ButtonSign = ({ handleSignUp, type }) => (
  <button className={s.buttonSign} type={type} onClick={handleSignUp}>
    <h2 className={s.btnText}>go!</h2>
  </button>
);

export default ButtonSign;
