import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import ModalDefficulty from '../../Modal/Modal-hard';
import ModalStatus from '../../Modal/Modal-status';
import { createCard } from '../../../redux/operations/cardOperations';
import Calendar from '../../Calendar/Calendar';

const Card = React.forwardRef(({ register, handleSubmit, getDateValue }, ref) => {
  const [isDeleteModalShown, setModal] = useState(false);
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);
  const [isOpenCategory, setisOpenCategory] = useState(false);
  const [task, setTask] = useState(false);
  const [category, setCategory] = useState('STUFF');

  const categoryValue = value => {
    setCategory(value);
  };

  return (
    <div className={s.container}>
      <form className={s.formCard} onSubmit={handleSubmit}>
        <div className={s.head}>
          <div onClick={() => setDifficultyModal(!isDifficultyModalShown)} className={s.difficulty}>
            {isDifficultyModalShown && <ModalDefficulty />}
            <svg className={s.iconEllipse}>
              <use href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={s.difficulty}>Easy</p>
            <svg className={s.iconPolygon}>
              <use href={sprite + '#icon-polygon'}></use>
            </svg>
          </div>
          <div className={s.iconContainer} onClick={() => setTask(!task)}>
            {task ? (
              <svg className={s.iconTask}>
                <use href={sprite + '#icon-star'}></use>
              </svg>
            ) : (
              <svg className={s.iconTrophy}>
                <use x="-4" y="2" href={sprite + '#icon-trophy'}></use>
              </svg>
            )}
          </div>
        </div>
        <div className={s.main}>
          <p className={s.textInput}>Create New Quest</p>
          <input className={s.titleInput} {...register('title')} ref={ref}></input>
          <div className={s.dateFlex}>
            <Calendar getDate={getDateValue}></Calendar>
          </div>
        </div>
        <div className={s.foot}>
          <div onClick={() => setisOpenCategory(!isOpenCategory)}>
            {isOpenCategory ? (
              <>
                {' '}
                <ModalStatus getValue={categoryValue} /> <p className={s.category}>{category}</p>{' '}
              </>
            ) : (
              <p className={s.category}>{category}</p>
            )}
          </div>
          <div>
            <div className={s.createCard}>
              <button className={s.btnClose} ref={ref} onClick={() => setModal(true)}>
                <svg className={s.buttonClear}>
                  <use href={sprite + '#icon-clear'}></use>
                </svg>
              </button>
              <button className={s.buttonCreate} ref={ref}>
                create
              </button>
            </div>
          </div>
        </div>
      </form>
      {isDeleteModalShown && (
        <ModalDelete onClose={() => setModal(false)} type="Quest"></ModalDelete>
      )}
    </div>
  );
});

export default function CreateCard({ data }) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [dateValue, setDate] = useState(new Date());

  const getDateValue = value => {
    setDate(value);
  };

  const onSubmit = data => {
    const body = {
      ...data,
      type: 'Task',
      date: date(dateValue),
      time: time(dateValue),
    };

    dispatch(createCard(body));
  };

  return (
    <Card
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      data={data}
      getDateValue={getDateValue}
    />
  );
}
