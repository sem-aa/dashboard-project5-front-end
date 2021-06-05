import { useState } from 'react';
import cn from 'classnames';
import s from './section.module.css';
import sprite from '../../icon/sprite.svg';

//fake cart
import './fakeCard.css';
const Card = data => <div className="fakeCard">{JSON.stringify(data)}</div>;

export default function Section({ title, data }) {
  const isDoneSection = title.toUpperCase() === 'DONE';
  const [isOpen, setOpen] = useState(true);

  return (
    <section className={cn(s.section, { [s.doneSection]: isDoneSection })}>
      <div className={s.head} onClick={() => setOpen(!isOpen)}>
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
        {isOpen && data.map(el => <Card data={el} key={el._id} />)}
      </div>
    </section>
  );
}
