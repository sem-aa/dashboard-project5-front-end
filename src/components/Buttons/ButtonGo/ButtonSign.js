import React from 'react';
import s from './ButtonSign.module.css';

const ButtonSign = ({ handleLogIn }) => (

   <button className={s.buttonGo} type="submit" onClick={handleLogIn}>
      <h2 className={s.btnText}>Sig</h2>
   </button>
);

export default ButtonSign;