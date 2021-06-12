import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import ModalDifficulty from '../../Modal/Modal-hard';
import ModalStatus from '../../Modal/Modal-status';
import { createCard } from '../../../redux/operations/cardOperations';
import Calendar from '../../Calendar/Calendar';
import Select from '../../Select';
import { getCurrentFullDate, getCurrentTime } from '../../../helper';

const Card = React.forwardRef(({ register, handleSubmit, getDateValue, setDifficulty }, ref) => {
  const [isDeleteModalShown, setModal] = useState(false);
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [task, setTask] = useState('Quest');
  const [category, setCategory] = useState('STUFF');

  const categoryValue = value => {
    setCategory(value);
  };

  return (
    <div className={s.container}>
      <form className={s.formCard} onSubmit={handleSubmit}>
        <div className={s.head}>
          <Select setDifficulty={setDifficulty} />
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
          <div onClick={() => setIsOpenCategory(!isOpenCategory)}>
            {isOpenCategory ? (
              <>
                <ModalStatus getValue={categoryValue} /> <p className={s.category}>{category}</p>
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
              <button className={s.buttonCreate} ref={ref} type="submit">
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
  const { register, handleSubmit, control } = useForm();
  const [dateValue, setDate] = useState(new Date());
  const [difficulty, setDifficulty] = useState('');
  // const [difficulty, setDifficulty] = useState('');

  const getDateValue = value => {
    setDate(value);
  };

  const onSubmit = data => {
    console.log(difficulty);
    const body = {
      ...data,
      category: 'Work',
      type: 'Task',
      difficulty: 'Easy',
      date: getCurrentFullDate(dateValue),
      time: getCurrentTime(dateValue),
    };

    dispatch(createCard(body));
  };

  return (
    <Card
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      control={control}
      data={data}
      setDifficulty={setDifficulty}
      getDateValue={getDateValue}
    />
  );
}
