import React from 'react';
import s from './Done.module.css';

export default function Done() {
  return (
    <>
    
        <section className={s.done}>
    <TransitionGroup component="ul" className={s.list} >
      {list.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={s} unmountOnExit>
          <ContactsItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
    
    </>
    
)}