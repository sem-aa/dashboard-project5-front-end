import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Verification.module.css';
import Alert from '../Alert';

export default function Verification({ verifyData }) {
  const [errorMessage, setErrorMessage] = useState('');
  const { email, password } = verifyData;
  console.log('EMAIL', email, 'PASSWORD', password);

  const checkVerifyData = (email, password) => {
    switch ((email, password)) {
      case email === '':
        setErrorMessage('поле  mail является обязательным ');
        break;
      case password === '':
        setErrorMessage('gоле  password  является обязательным ');
        break;
      case (email === '') & (password === ''):
        setErrorMessage('gоля email и password  являются обязательными ');
        break;

      // сюда можно добавить другие условия
      default:
        setErrorMessage(null);
    }
    return errorMessage;
  };

  return (
    <>
      <CSSTransition>
        <h2>{checkVerifyData()}</h2>
      </CSSTransition>
    </>
  );
}
