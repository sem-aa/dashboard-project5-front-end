import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import Section from '../../components/Section';
import { getCards } from '../../redux/selectors/userSelectors';
import s from './main.module.css';

export default function MainPage() {
  const cards = useSelector(getCards);
  const cardsSorted = sortCards(cards);

  return (
    <>
      <Header />
      <div className={s.main}>
        <Container>
          <Section title={'today'} data={cardsSorted.today} />
          <Section title={'tomorrow'} data={cardsSorted.tomorrow} />
          <Section title={'done'} data={cardsSorted.done} />
        </Container>
      </div>
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

      const [today] = new Date().toISOString().split('T');

      el.date === today ? acc.today.push(el) : acc.tomorrow.push(el);

      return acc;
    },
    { done: [], today: [], tomorrow: [] },
  );
