import { COLOR } from './constants';

export const colorDifficult = diff => {
  let color = '';
  switch (diff) {
    case 'Easy':
      color = COLOR.easy;
      break;
    case 'Normal':
      color = COLOR.normal;
      break;
    case 'Hard':
      color = COLOR.hard;
      break;
    default:
      color = COLOR.easy;
  }
  return color;
};

export const colorCategory = category => {
  let color = '';
  switch (category) {
    case 'Stuff':
      color = COLOR.stuff;
      break;
    case 'Family':
      color = COLOR.family;
      break;
    case 'Health':
      color = COLOR.health;
      break;
    case 'Learning':
      color = COLOR.learning;
      break;
    case 'Leisure':
      color = COLOR.leisure;
      break;
    case 'Work':
      color = COLOR.work;
      break;
    default:
      color = COLOR.stuff;
  }
  return color;
};

export const getDateFormat = dateValue => {
  return (
    dateValue.getFullYear() +
    '-' +
    (dateValue.getMonth() + 1 < 10 ? '0' + (dateValue.getMonth() + 1) : dateValue.getMonth() + 1) +
    '-' +
    (dateValue.getDate() < 10 ? '0' + dateValue.getDate() : dateValue.getDate())
  );
};

export const getTimeFormat = dateValue => {
  return (
    (dateValue.getHours() < 10 ? '0' + dateValue.getHours() : dateValue.getHours()) +
    ':' +
    (dateValue.getMinutes() === 30 ? '30' : '00')
  );
};

// Time

export const getCurrentTime = time => {
  const date = time || new Date();

  return date.toString().split(' ')[4].split('').splice(0, 5).join('');
};

export const getCurrentFullDate = time => {
  const date = time || new Date();

  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
    '-' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  );
};

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
export const todayDate = getDateFormat(today);
export const tomorrowDate = getDateFormat(tomorrow);

export const getMonth = function (date, type) {
  const dateFormat = new Date(date.split('-').join(','));
  const dateValue = dateFormat.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
  });
  return type === 'Challenge' ? `by ${dateValue}` : dateValue;
};

export const getDayName = function (date, type) {
  if (date === todayDate) {
    return type === 'Challenge' ? `by Today` : `Today`;
  } else if (date === tomorrowDate) {
    return type === 'Challenge' ? `by Tomorrow` : `Tomorrow`;
  } else {
    return getMonth(date, type);
  }
};
