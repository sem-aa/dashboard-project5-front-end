import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sprite from '../../icon/sprite.svg';
import s from './NewCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../../redux/operations/cardOperations';
import ModalDelete from '../Modal/Modal-delete';
import ModalDefficulty from '../Modal/Modal-hard'
import ModalCategory from '../Modal/Modal-status'
import { createCard } from '../../redux/operations/cardOperations';

const Card = React.forwardRef(({ data, register, handleSubmit }, ref) => {
  const [isDeleteModalShown, setModal] = useState(false);
  const dispatch = useDispatch();
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);
  const [isEdit, setEdit] = useState(true)
  const [task, setTask] = useState(false)
  const [category, setCategory] = useState(false)


  return (
    <div onClick={() => setEdit(!isEdit)} className={s.container}>
      <form onSubmit={handleSubmit}>
        <div className={s.head}>

          <div onClick={() => setDifficultyModal(!isDifficultyModalShown)} className={s.difficulty}>
            {isDifficultyModalShown && <ModalDefficulty />}
            <svg className={s.iconEllipse} >
              <use href={sprite + '#icon-ellipse'}></use>
            </svg>
            <p className={s.difficulty}>{data.difficulty}</p>
            {isEdit && <svg className={s.iconPolygon}>
              <use href={sprite + '#icon-polygon'}></use>
            </svg>}
          </div>
          {/* <select
              className={s.difficulty}
              name={'difficulty'}
              defaultValue={data.difficulty}
              ref={ref}
              {...register('difficulty')}
            >

              <option
                className={s.item}
                value="Easy"
                selected={'Easy' === data.difficulty && 'selected'}
              >
                Easy
            </option>

              <option value="Normal" selected={'Normal' === data.difficulty && 'selected'}>
                Normal
            </option>
              <option value="Hard" selected={'Hard' === data.difficulty && 'selected'}>
                Hard
            </option>
            </select> */}
          <div onClick={() => setTask(!task)}>
            {task ?
              <svg width='19px' height='19px'>
                <use className={s.iconTask} href={sprite + '#icon-star'}></use>
              </svg> :
              <svg width='19px' height='19px' >
                <use className={s.iconTrophy} href={sprite + '#icon-trophy'}></use>
              </svg>}
          </div>
          {/* <select className={s.task} name={'type'} ref={ref} {...register('type')}>
                    <option value="Task">Task</option>
            <option  value="Challenge">Challenge</option>
                    </select> */}
        </div>

        <div>
          {isEdit ? (
            <input
              className={s.titleInput}
              {...register('title')}
              defaultValue={data.title}
              ref={ref}
            ></input>
          ) : (
            <h2 className={s.title}>{data.title}</h2>
          )}
          {isEdit ? (
            <div className={s.dateFlex}>
              <input
                className={s.inputDate}
                {...register('date')}
                ref={ref}
                placeholder="Today"
              ></input>
              <button ref={ref}>
                <svg className={s.calendar} height="10px" width="10px">
                  <use href={sprite + '#icon-calendar'}></use>
                </svg>
              </button>
            </div>
          ) : (
            <p className={s.date}>March 23, 21:30</p>
          )}

        </div>
        <div className={s.foot}>
          <div onClick={() => setCategory(!category)}>{category ?
            <ModalCategory /> :
            <p className={s.category}>{data.category}</p>}</div>


          {/* <select className={s.category} name={'category'} ref={ref} {...register('category')}>
            <option className={s.stuff} value="Stuff" ref={ref}>
              Stuff
            </option>
            <option value="Family" selected={data.category === 'Family' && 'selected'}>
              FAMILY
            </option>
            <option value="Health" selected={data.category === 'Health' && 'selected'}>
              HEALTH
            </option>
            <option value="Learning" selected={data.category === 'Learning' && 'selected'}>
              LEARNING
            </option>
            <option value="Leisure" selected={data.category === 'Leisure' && 'selected'}>
              LEISURE
            </option>
            <option value="Stuff" selected={data.category === 'Stuff' && 'selected'}>
              STUFF
            </option>
            <option value="Work" selected={data.category === 'Work' && 'selected'}>
              WORK
            </option>
          </select> */}
          <div>
            {isEdit && (
              <div className={s.buttonFlex}>
                <button className={s.buttonCard} ref={ref} type="submit">
                  <svg className={s.buttonSave}>
                    <use href={sprite + '#icon-save'}></use>
                  </svg>
                </button>
                <button className={s.buttonClose} ref={ref} onClick={() => setModal(true)}>
                  <svg className={s.buttonClear}>
                    <use href={sprite + '#icon-clear'}></use>
                  </svg>
                </button>
                <button className={s.buttonCard} ref={ref} type='submit'>
                  <svg className={s.buttonDone}>
                    <use href={sprite + '#icon-done'}></use>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </form>

      {isDeleteModalShown && (
        <ModalDelete
          onClose={() => setModal(false)}
          onDelete={() => dispatch(deleteCard(data._id))}
          type="Quest"
        ></ModalDelete>
      )}
    </div>
  );
});

export default function CardForm({ data }) {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const body = {
      ...data,
      type: 'Task',
      date: new Date().toISOString().split('T')[0],
      time: new Date().getHours() + ':' + new Date().getMinutes(),
    };

    dispatch(createCard(body));
  };

  return (
    <Card
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      data={data}

    />
  );
}