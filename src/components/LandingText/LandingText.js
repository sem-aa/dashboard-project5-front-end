import React from 'react';
import style from './LandingText.module.css';

const LandingText = () => (

  <>
    <div className={style.landingTittleBox}>
      <h1 className={style.landingTittle}>Questify</h1>
    </div>
    <div className={style.landingDescriptionBox}>
      <p className={style.landingDescription}>Questify will turn your life into
        a thrilling game full of amazing
        quests and exciting challenges.</p>
    </div>
    <div className={style.landingRequestBox}>
      <p className={style.landingRequest}>Write your email to sign up or log in</p>
    </div>
  </>
);

export default LandingText;