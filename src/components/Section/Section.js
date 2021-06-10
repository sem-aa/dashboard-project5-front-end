import React, { useState } from 'react';
import cn from 'classnames';
import s from './section.module.css';
import sprite from '../../icon/sprite.svg';
import NewCard from '../Card/MainCard';

////////////////////////////////// fake cart //////////////////////////////////

// import './fakeCard.css';

// const Card = React.forwardRef(({ data, register, handleSubmit }, ref) => {
//   return (
//     <div className="fakeCard">
//       <form onSubmit={handleSubmit}>
//         <input {...register('title')} ref={ref}></input>
//         <select name={'difficulty'} ref={ref} {...register('difficulty')}>
//           <option value="Easy">Easy</option>
//         </select>
//         <select name={'category'} ref={ref} {...register('category')}>
//           <option value="Stuff">Stuff</option>
//           <option value="Not Stuff">Not Stuff</option>
//         </select>
//         <select name={'type'} ref={ref} {...register('type')}>
//           <option value="Task">Task</option>
//           <option value="Challenge">Challenge</option>
//         </select>
//         <input type="submit" value="create" />
//       </form>
//     </div>
//   );
// });
////////////////////////////////// fake cart //////////////////////////////////

export default function Section({ title, data, newCard }) {
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
            {newCard && <NewCard data={newCard} isCreateCard />}
            {data.map(el => (
              <NewCard data={el} key={el._id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
