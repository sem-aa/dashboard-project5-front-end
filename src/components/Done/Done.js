import React from 'react';
import s from './Done.module.css';
import { CSSTransition } from 'react-transition-group';


function Done() {
  return (
    <>
      <section className={s.done}>
        <TransitionGroup component="ul" classNames={s.list} >
          {list.map(item => (
            <CSSTransition key={item.id} timeout={250} classNames={s} unmountOnExit>
              <Card item={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    </>
  )
}

export default Done;