import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { createCard } from '../../redux/operations/cardOperations';
import s from './section.module.css';
import sprite from '../../icon/sprite.svg';

////////////////////////////////// fake cart //////////////////////////////////
import './fakeCard.css';
import { useDispatch } from 'react-redux';
const Card = React.forwardRef(({ data, register, handleSubmit }, ref) => {
  return (
    <div className="fakeCard">
      <form onSubmit={handleSubmit}>
        <input {...register('title')} ref={ref}></input>
        <select name={'difficulty'} ref={ref} {...register('difficulty')}>
          <option value="Easy">Easy</option>
        </select>
        <select name={'category'} ref={ref} {...register('category')}>
          <option value="Stuff">Stuff</option>
          <option value="Not Stuff">Not Stuff</option>
        </select>
        <select name={'type'} ref={ref} {...register('type')}>
          <option value="Task">Task</option>
          <option value="Challenge">Challenge</option>
        </select>
        <input type="submit" value="create" />
      </form>
    </div>
  );
});
////////////////////////////////// fake cart //////////////////////////////////

export default function Section({ title, data }) {
  const isDoneSection = title.toUpperCase() === 'DONE';
  const [isOpen, setOpen] = useState(true);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    const body = {
      ...data,
      date: new Date().toISOString().split('T')[0],
      time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes(),
    };

    dispatch(createCard(body));
  };

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
        {isOpen &&
          data.map(el => (
            <Card
              data={el}
              key={el._id}
              handleSubmit={handleSubmit(onSubmit)}
              register={register}
            />
          ))}
      </div>
    </section>
  );
}
