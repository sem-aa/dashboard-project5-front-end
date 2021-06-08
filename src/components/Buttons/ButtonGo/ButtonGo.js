import React from 'react';
import s from './ButtonGo.module.css';

const ButtonGo = ({handleLogIn}) => (

    <button className={s.buttonGo}  type="submit" onClick={handleLogIn}>
       <h2 className={s.btnText}>go!</h2>
     </button>     
  );
  
  export default ButtonGo;