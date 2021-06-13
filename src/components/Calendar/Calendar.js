import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import sprite from '../../icon/sprite.svg';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import s from './Calendar.module.css';

const Calendar = ({ getDate, type }) => {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 1));
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className={s.dateContainer}>
      <div className={type === 'Challenge' ? `${s.dateValue} ${s.challenge}` : `${s.dateValue}`}>
        {day + ', ' + value}
      </div>
      <button type="button" onClick={onClick} ref={ref}>
        <svg className={s.icon}>
          <use href={sprite + '#icon-calendar'}></use>
        </svg>
      </button>
    </div>
  ));

  useEffect(() => {
    getDate(startDate);
  }, [startDate, getDate]);

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const todayDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  const tomorrowDate =
    tomorrow.getFullYear() + '/' + (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate();
  const chosenDate =
    startDate.getFullYear() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getDate();

  const getDay = function () {
    if (chosenDate === todayDate) {
      return type === 'Challenge' ? `by Today` : `Today`;
    } else if (chosenDate === tomorrowDate) {
      return type === 'Challenge' ? `by Tomorrow` : `Tomorrow`;
    } else {
      const date = startDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
      });
      return date;
    }
  };
  const day = getDay();

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
