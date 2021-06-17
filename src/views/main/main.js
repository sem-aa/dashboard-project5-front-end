import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import Section from '../../components/Section';
import { getToken } from '../../redux/selectors';
import { getCards } from '../../redux/selectors';
import { todayDate, tomorrowDate } from '../../helper';
import api from '../../services/api';
import s from './main.module.css';

export default function MainPage() {
  const token = useSelector(getToken);
  const cards = useSelector(getCards);
  const cardsSorted = sortCards(cards);
  const [newCard, setNewCard] = useState(null);

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
            <Section
              title={'today'}
              data={cardsSorted.today}
              newCard={newCard}
              deleteNewCard={deleteNewCard}
            />
            <Section title={'tomorrow'} data={cardsSorted.tomorrow} />
            <Section title={'other'} data={cardsSorted.other} />
            <Section title={'done'} data={cardsSorted.done} />
            <ButtonAdd className={s.btn} handleClick={addCard} />
          </Container>
        </div>
      </main>
    </>
  );
}
const sortCards = cards => {
  const sortByTime = array => array.sort((a, b) => (a.time > b.time ? 1 : -1));
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
      if (el.status === 'Complete') {
        acc.done.push(el);
        sortByDateAndTime(acc.done);
      } else if (el.date === today) {
        acc.today.push(el);
        sortByTime(acc.today);
      } else if (el.date === tomorrow) {
        acc.tomorrow.push(el);
        sortByTime(acc.tomorrow);
      } else {
        acc.other.push(el);
        sortByDateAndTime(acc.other);
      }
      return acc;
    },
    { done: [], today: [], tomorrow: [], other: [] },
  );
};
