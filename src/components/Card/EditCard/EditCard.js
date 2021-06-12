import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import ModalDefficulty from '../../Modal/Modal-hard';
import ModalCategory from '../../Modal/Modal-status';
import { createCard } from '../../../redux/operations/cardOperations';
import Complete from '../CompleteForm';
import Calendar from '../../Calendar/Calendar';
import { date, time } from '../../../helper/helper';
import { CSSTransition } from 'react-transition-group';
import cardTransition from './card.module.css';

const EditCard = React.forwardRef(({ data, register, handleSubmit, getDateValue }, ref) => {
  const [isDeleteModalShown, setDeleteModal] = useState(false);
  const [isDifficultyModalShown, setDifficultyModal] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [task, setTask] = useState('Quest');
  const [category, setCategory] = useState('STUFF');
  const [complete, setComlete] = useState(false);

  const categoryValue = value => {
    setCategory(value);
  };

  return (
    <div className={task === 'Challenge' ? `${s.container} ${s.challenge}` : s.container}>
      {complete ? (
        <CSSTransition in timeout={500} classNames={cardTransition} appear>
          <Complete data={data} />
        </CSSTransition>
      ) : (
        <>
          <form className={s.formCard} onSubmit={handleSubmit}>
            <div className={s.head}>
              <div
                onClick={() => setDifficultyModal(!isDifficultyModalShown)}
                className={s.difficulty}
              >
                {isDifficultyModalShown && <ModalDefficulty task={task} />}
                <svg className={s.iconEllipse}>
                  <use href={sprite + '#icon-ellipse'}></use>
                </svg>
                <p className={s.difficulty}>Easy</p>
                <svg className={s.iconPolygon}>
                  <use href={sprite + '#icon-polygon'}></use>
                </svg>
              </div>
              {task === 'Quest' ? (
                <div className={s.iconContainer} onClick={() => setTask('Challenge')}>
                  <svg className={s.iconTask}>
                    <use href={sprite + '#icon-star'}></use>
                  </svg>
                </div>
              ) : (
                <div className={s.iconContainer} onClick={() => setTask('Quest')}>
                  <svg className={s.iconTrophy}>
                    <use x="-4" y="2" href={sprite + '#icon-trophy'}></use>
                  </svg>
                </div>
              )}
            </div>
            <div className={s.main}>
              <p className={s.textInput}>
                {task === 'Challenge' ? 'Edit challenge' : 'Edit quest'}
              </p>
              <input className={s.titleInput} {...register('title')} ref={ref}></input>
              <div className={s.dateFlex}>
                <Calendar getDate={getDateValue}></Calendar>
              </div>
            </div>
            <div className={s.foot}>
              <div onClick={() => setIsOpenCategory(!isOpenCategory)}>
                {isOpenCategory ? (
                  <>
                    {' '}
                    <ModalCategory getValue={categoryValue} />{' '}
                    <p className={s.category}>{category}</p>{' '}
                  </>
                ) : (
                  <p className={s.category}>{category}</p>
                )}
              </div>
              <div>
                <div>
                  <button className={s.buttonCard} type="submit" ref={ref}>
                    <svg className={s.buttonSave}>
                      <use href={sprite + '#icon-save'}></use>
                    </svg>
                  </button>
                  <button
                    className={s.buttonClose}
                    type="button"
                    ref={ref}
                    onClick={() => setDeleteModal(true)}
                  >
                    <svg className={s.buttonClear}>
                      <use href={sprite + '#icon-clear'}></use>
                    </svg>
                  </button>
                  <button className={s.buttonCard} type="button" ref={ref}>
                    <svg onClick={() => setComlete(true)} className={s.buttonDone}>
                      <use href={sprite + '#icon-done'}></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
      {isDeleteModalShown && (
        <ModalDelete onClose={() => setDeleteModal(false)} type={task} id={data._id}></ModalDelete>
      )}
    </div>
  );
});

export default function CardForm({ data }) {
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
    <EditCard
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      data={data}
      getDateValue={getDateValue}
    />
  );
}
