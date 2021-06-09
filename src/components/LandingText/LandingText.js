import React from 'react';
import s from './LandingText.module.css';

const LandingText = () => (

  <>
    <div className={s.landingTittleBox}>
      <h1 className={s.landingTittle}>Questify</h1>
    </div>
    <div className={s.landingDescriptionBox}>
      <p className={s.landingDescription}>Questify will turn your life into
a thrilling game full of amazing
quests and exciting challenges.</p>
    </div>
    <div className={s.landingRequestBox}>
      <p className={s.landingRequest}>Write your email to sign up or log in</p>
    </div>
  </>      
);

export default LandingText;