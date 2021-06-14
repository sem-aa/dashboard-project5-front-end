import React from 'react';
import s from './Alert.module.css'
import { CSSTransition } from 'react-transition-group';

export default function Alert({ text , errorStatus}) {
  return (
    <>
      <CSSTransition in={errorStatus} classNames={s} unmountOnExit timeout={250}>
        <h2 className={s.alert}>{text}</h2>
      </CSSTransition>
    </>
  )
}

