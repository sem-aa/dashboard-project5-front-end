import React from 'react';
//import Container from '../../components/Container/Container';
import s from './landing.module.css';
import Form from '../../components/AuthForm/AuthForm';
import LandingText from '../../components/LandingText/LandingText';

const landing = () => (

  <>
    <div className={s.landing}>
      <LandingText />
      <Form />
    </div>
  </>      
);

export default landing;