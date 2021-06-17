import { useState } from 'react';
import cn from 'classnames';
import NewCard from '../Card/MainCard';
import sprite from '../../icon/sprite.svg';
import style from './section.module.css';

export default function Section({ title, data, newCard, deleteNewCard }) {
  const isDoneSection = title.toUpperCase() === 'DONE';
  const [isOpen, setOpen] = useState(isDoneSection ? false : true);

  return (
    <section className={cn(style.section, { [style.doneSection]: isDoneSection })}>
      <div className={style.head} onClick={() => isDoneSection && setOpen(!isOpen)}>
        <h3 className={style.title}>{title}</h3>

        {isDoneSection && (
          <>
            <div className={cn(style.button, { [style.rotate]: isOpen })}>
              <svg className={style.icon}>
                <use href={sprite + '#icon-polygon'}></use>
              </svg>
            </div>
            <div className={style.line} />
          </>
        )}
      </div>
      <div className={style.collection}>
        {isOpen && (
          <>
            {newCard && <NewCard data={newCard} isCreateCard deleteNewCard={deleteNewCard} />}
            {data.map(el => (
              <NewCard data={el} key={el._id} isDoneSection={isDoneSection} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
