import { COLOR } from './constants'


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

export const date = dateValue => {
  return dateValue.getFullYear() + '-' + (dateValue.getMonth() + 1) + '-' + dateValue.getDate();
};
export const time = dateValue => {
  return dateValue.getHours() + ':' + dateValue.getMinutes();
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
