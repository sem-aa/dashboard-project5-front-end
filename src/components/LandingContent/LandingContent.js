import React, { useState } from 'react';
import style from './LandingContent.module.css';
import Form from '../AuthForm/AuthForm';

const LandingContent = () => {
  const [registered, setRegistered] = useState(true);

  return (
    <>
      <div className={style.landingTittleBox}>
        <h1 className={style.landingTittle}>Questify</h1>
      </div>
      <div className={style.landingDescriptionBox}>
        <p className={style.landingDescription}>
          Questify will turn your life into a thrilling game full of amazing quests and exciting
          challenges.
        </p>
      </div>
      <div className={style.landingRequestBox}>
        <p className={style.landingRequest}>
          Write your email to{' '}
          <span className={style.linkAuth} onClick={() => setRegistered(false)}>
            sign up{' '}
          </span>
          or{' '}
          <span className={style.linkAuth} onClick={() => setRegistered(true)}>
            log in
          </span>
        </p>
      </div>
      <Form registered={registered} />
    </>
  );
};

export default LandingContent;
