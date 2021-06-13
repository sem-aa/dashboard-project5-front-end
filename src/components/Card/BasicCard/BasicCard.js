import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import ModalStatus from '../../Modal/Modal-status';
import Calendar from '../../Calendar/Calendar';
import Select from '../../Select';
import { createCard } from '../../../redux/operations/cardOperations';
import { getCurrentFullDate, getCurrentTime } from '../../../helper';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';

export default function Card({ data, children }) {
  const dispatch = useDispatch();
  const inputTitle = useRef();

  // Modal
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  //Data
  const [dateValue, setDate] = useState(new Date());
  const [difficulty, setDifficulty] = useState('Normal');
  const [category, setCategory] = useState('Stuff');
  const [type, setType] = useState('Task');
  const [title, setTitle] = useState('');

  const LocalData = {
    ...data,
    difficulty,
    category,
    type,
    title,
    date: getCurrentFullDate(dateValue),
    time: getCurrentTime(dateValue),
  };

  const getDateValue = value => setDate(value);

  const handleChange = ({ target }) => {
    const { value } = target;

    setTitle(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      const body = { ...data, ...LocalData };
      delete body._id;

      if (body.title === '') return inputTitle.current.classList.add(s.titleError);

      dispatch(createCard(body));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ position: 'relative' }}
      className={cn(s.container, { [s.challenge]: LocalData.type === 'Challenge' })}
    >
      <form className={s.formCard} onSubmit={handleSubmit}>
        <div className={s.head}>
          <Select setDifficulty={setDifficulty} />
          <div
            className={s.iconContainer}
            onClick={() =>
              LocalData.type === 'Challenge' ? setType('Task') : setType('Challenge')
            }
          >
            {LocalData.type === 'Task' ? (
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
          <input
            className={s.titleInput}
            onChange={handleChange}
            value={title}
            ref={inputTitle}
          ></input>
          <div className={s.dateFlex}>
            <Calendar getDate={getDateValue}></Calendar>
          </div>
        </div>
        <div className={s.foot}>
          <div onClick={() => setIsOpenCategory(!isOpenCategory)}>
            {isOpenCategory ? (
              <>
                <ModalStatus getValue={setCategory} />
                <p className={s.category}>{LocalData.category}</p>
              </>
            ) : (
              <p className={s.category}>{LocalData.category}</p>
            )}
          </div>

          {children}
        </div>
      </form>
    </div>
  );
}
