import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import sprite from '../../icon/sprite.svg';
import style from './Calendar.module.css';
import { getDateFormat, getDayName } from '../../helper';

const Calendar = ({ getDate, type, date, time }) => {
  const [startDate, setStartDate] = useState(date ? new Date(`${date}T${time}:00`) : new Date());
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className={style.dateContainer}>
      <div className={type === 'Challenge' ? `${style.dateValue} ${style.challenge}` : `${style.dateValue}`}>
        {dayName + ', ' + value}
      </div>
      <button type="button" onClick={onClick} ref={ref}>
        <svg className={style.icon}>
          <use href={sprite + '#icon-calendar'}></use>
        </svg>
      </button>
    </div>
  ));

  useEffect(() => {
    getDate(startDate);
  }, [startDate, getDate]);

  const chosenDate = getDateFormat(startDate);
  const dayName = getDayName(chosenDate, type);

  return (
    <div>
      <style>
        {`.react-datepicker {
            display: flex;
          }`}
      </style>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="HH':'mm"
        customInput={<ExampleCustomInput />}
        shouldCloseOnSelect={true}
      />
    </div>
  );
};

export default Calendar;
