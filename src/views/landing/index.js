import React from 'react';
import Container from '../../components/Container/Container';
import s from './landing.module.css';
import Form from '../../components/AuthForm/AuthForm';

const landing = () => (

  <Container>
    <div className={s.landing}>
      <Form/>
    </div>
  </Container>      
);

export default landing;