import React from 'react';
import s from './ButtonSign.module.css';

const ButtonSign = ({ handleSignUp }) => (

   <button className={s.buttonSign} type="submit" onClick={handleSignUp}>
      <h2 className={s.btnText}>Sign</h2>
   </button>
);

export default ButtonSign;