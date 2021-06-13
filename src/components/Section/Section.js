import React, { useState } from 'react';
import cn from 'classnames';
import s from './section.module.css';
import sprite from '../../icon/sprite.svg';
import NewCard from '../Card/MainCard';

export default function Section({ title, data, newCard, deleteNewCard }) {
  const isDoneSection = title.toUpperCase() === 'DONE';
  const [isOpen, setOpen] = useState(true);

  return (
    <section className={cn(s.section, { [s.doneSection]: isDoneSection })}>
      <div className={s.head} onClick={() => isDoneSection && setOpen(!isOpen)}>
        <h3 className={s.title}>{title}</h3>

        {isDoneSection && (
          <>
            <div className={cn(s.button, { [s.rotate]: isOpen })}>
              <svg className={s.icon}>
                <use href={sprite + '#icon-polygon'}></use>
              </svg>
            </div>
            <div className={s.line} />
          </>
        )}
      </div>
      <div className={s.collection}>
        {isOpen && (
          <>
            {newCard && <NewCard data={newCard} isCreateCard deleteNewCard={deleteNewCard} />}
            {data.map(el => (
              <NewCard data={el} key={el._id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
