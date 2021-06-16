import React from 'react';
import style from './landing.module.css';
import Form from '../../components/AuthForm/AuthForm';
import LandingText from '../../components/LandingText/LandingText';

const landing = () => (

  <>
    <div className={style.landing}>
      <LandingText />
      <Form />
    </div>
  </>
);

export default landing;