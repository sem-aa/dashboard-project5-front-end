import React from 'react';
import Container from '../../components/Container/Container'
import s from './landing.module.css'
import Form from '../../services/TestAuthForm'
import Module from '../../components/Modal/Modal-status'
import Modul from '../../components/Modal/Modal-hard'


const landing = () => (

  <Container>
    <Form/>
    <div className={s.landing}>
     </div>
      </Container>
    
  
);

export default landing;