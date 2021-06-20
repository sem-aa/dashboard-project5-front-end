import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import Section from '../../components/Section';
import { getToken } from '../../redux/selectors';
import { getCards } from '../../redux/selectors';
import { todayDate, tomorrowDate, isNextWeek, isExpiredDate } from '../../helper';
import api from '../../services/api';
import s from './main.module.css';

export default function MainPage() {
  const token = useSelector(getToken);
  const cards = useSelector(getCards);
  const [newCard, setNewCard] = useState(null);
  const { expired, today, tomorrow, nextWeek, other, done } = sortCards(cards);

  const addCard = () => {
    const templateData = {
      title: '',
      difficulty: 'Easy',
      category: 'Stuff',
      type: 'Task',
    };

    setNewCard(templateData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteNewCard = () => setNewCard(null);

  useEffect(() => {
    if (token) {
      api.token.set(token);
    }
  }, [token]);

  return (
    <>
      <Header />

      <main>
        <div className={s.main}>
          <Container>
            {expired[0] && <Section title={'Expired'} data={expired} />}

            <Section title={'today'} data={today} newCard={newCard} deleteNewCard={deleteNewCard} />

            {tomorrow[0] && <Section title={'tomorrow'} data={tomorrow} />}
            {nextWeek[0] && <Section title={'next week'} data={nextWeek} />}
            {other[0] && <Section title={'other'} data={other} />}
            <Section title={'done'} data={done} />

            <ButtonAdd className={s.btn} handleClick={addCard} />
          </Container>
        </div>
      </main>
    </>
  );
}

const sortCards = cards => {
  const sortByDateAndTime = array =>
    array.sort(function (a, b) {
      const dateA = new Date(`${a.date}T${a.time}:00`);
      const dateB = new Date(`${b.date}T${b.time}:00`);
      return dateA - dateB;
    });

  return cards.reduce(
    (acc, el) => {
      const today = todayDate;
      const tomorrow = tomorrowDate;
      const addAndSort = (addTo, element) => {
        element && addTo.push(element);
        sortByDateAndTime(addTo);
      };

      if (el.status === 'Complete') addAndSort(acc.done, el);
      else if (isExpiredDate(el.date, el.time)) addAndSort(acc.expired, el);
      else if (el.date === today) addAndSort(acc.today, el);
      else if (el.date === tomorrow) addAndSort(acc.tomorrow, el);
      else if (isNextWeek(el.date, el.time)) addAndSort(acc.nextWeek, el);
      else addAndSort(acc.other, el);

      return acc;
    },
    { done: [], expired: [], today: [], tomorrow: [], nextWeek: [], other: [] },
  );
};
