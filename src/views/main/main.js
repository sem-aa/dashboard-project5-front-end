import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import Section from '../../components/Section';
import { getToken } from '../../redux/selectors';
import { getCards } from '../../redux/selectors';
import { getCurrentFullDate } from '../../helper';
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

      <main className={s.main}>
        <Container>
          <Section
            title={'today'}
            data={cardsSorted.today}
            newCard={newCard}
            deleteNewCard={deleteNewCard}
          />
          <Section title={'tomorrow'} data={cardsSorted.tomorrow} />
          <Section title={'done'} data={cardsSorted.done} />

          <ButtonAdd className={s.btn} handleClick={addCard} />
        </Container>
      </main>
    </>
  );
}
const sortCards = cards =>
  cards.reduce(
    (acc, el) => {
      if (el.status === 'Complete') {
        acc.done.push(el);
        return acc;
      }
      const today = getCurrentFullDate();
      el.date === today ? acc.today.push(el) : acc.tomorrow.push(el);
      return acc;
    },
    { done: [], today: [], tomorrow: [] },
  );
