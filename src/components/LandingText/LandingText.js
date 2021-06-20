import React, { useState } from 'react';
import style from './LandingText.module.css';
import Form from '../AuthForm/AuthForm'


const LandingText = () => {
  const [register, setRegister] = useState(false)

  return (
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
        <p className={style.landingRequest}>Write your email to <span className={style.linkAuth} onClick={() => setRegister(true)} >sign up</span>  or <span className={style.linkAuth} onClick={() => setRegister(false)}>log in</span></p>
      </div>
      <Form register={register} />
    </>)

}

export default LandingText;