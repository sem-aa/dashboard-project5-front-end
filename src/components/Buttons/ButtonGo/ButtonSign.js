import React from 'react';
import s from './ButtonSign.module.css';

const ButtonSign = ({ handleLogIn }) => (

   <button className={s.buttonSign} type="submit" onClick={handleLogIn}>
      <h2 className={s.btnText}>Log</h2>
   </button>
);

export default ButtonSign;