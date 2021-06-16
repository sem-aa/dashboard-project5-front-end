import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import ModalStatus from '../../Modal/Modal-status';
import Calendar from '../../Calendar/Calendar';
import Select from '../../Select';
import { createCard } from '../../../redux/operations/cardOperations';
import { getDateFormat, getTimeFormat, colorCategory } from '../../../helper';
import sprite from '../../../icon/sprite.svg';
import style from '../NewCard.module.css';

export default function BasicCard({
  data,
  handleSubmit,
  isCreateCard,
  input,
  children,
  deleteNewCard,
  type,
  setType,
}) {
  const dispatch = useDispatch();
  const inputTitle = useRef();

  // Modal
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  //Data
  const [dateValue, setDate] = useState(new Date());
  const [difficulty, setDifficulty] = useState(data.difficulty);
  const [category, setCategory] = useState(data.category);
  const [title, setTitle] = useState(data.title);

  const LocalData = {
    ...data,
    difficulty,
    category,
    type,
    title,
    date: getDateFormat(dateValue),
    time: getTimeFormat(dateValue),
  };

  const getDateValue = value => setDate(value);
  const handleChange = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    try {
      const body = { ...data, ...LocalData };
      delete body._id;
      if (body.title === '') return inputTitle.current.classList.add(style.titleError);

      dispatch(createCard(body));
    } catch (error) {
      console.log(error);
    }
    deleteNewCard();
  };

  return (
    <div
      style={{ position: 'relative' }}
      className={cn(style.container, { [style.challenge]: type === 'Challenge' })}
    >
      <form
        className={style.formCard}
        onSubmit={handleSubmit ? e => handleSubmit(e, LocalData) : onSubmit}
      >
        <div className={style.head}>
          <Select difficulty={difficulty} setDifficulty={setDifficulty} type={type} />
          <div
            className={style.iconContainer}
            onClick={() => (type === 'Challenge' ? setType('Task') : setType('Challenge'))}
          >
            {type === 'Task' ? (
              <svg className={style.iconTask}>
                <use href={sprite + '#icon-star'}></use>
              </svg>
            ) : (
              <svg className={style.iconTrophy}>
                <use href={sprite + '#icon-trophy'}></use>
              </svg>
            )}
          </div>
        </div>
        <div className={style.main}>
          {isCreateCard && (
            <p className={style.textInput}>
              {type === 'Challenge' ? 'Create New Challenge' : 'Create New Quest'}
            </p>
          )}
          <input
            className={style.titleInput}
            onChange={handleChange}
            value={title}
            ref={input || inputTitle}
          ></input>
          <div className={style.dateFlex}>
            <Calendar
              getDate={getDateValue}
              type={type}
              date={data.date}
              time={data.time}
            ></Calendar>
          </div>
        </div>
        <div className={style.foot}>
          <div onClick={() => setIsOpenCategory(!isOpenCategory)}>
            {isOpenCategory ? (
              <>
                <ModalStatus getValue={setCategory} type={type} />
                <p className={style.category}>{LocalData.category}</p>
              </>
            ) : (
              <p
                style={{ backgroundColor: colorCategory(LocalData.category) }}
                className={style.category}
              >
                {LocalData.category}
                <svg className={style.iconPolygon}>
                  <use href={sprite + '#icon-polygon'}></use>
                </svg>
              </p>
            )}
          </div>
          {children}
        </div>
      </form>
    </div>
  );
}
