import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import Section from '../../components/Section';
import { getCards } from '../../redux/selectors/userSelectors';
import s from './main.module.css';


// fake response
const res = {
  title: 'Title',
  data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
};
// eslint-disable-next-line
const { title, data } = res;


export default function MainPage() {
  const cards = useSelector(getCards);
  const cardsSorted = sortCards(cards);
  const [today, setToday] = useState(cardsSorted.today);

  const addCard = () => {
    today.unshift({
      _id: Math.random(),
    });
    setToday([...today]);
  };


  return (
    <>
      <Header />
      <div className={s.main}>
        <Container>
          <Section title={'today'} data={today} />
          <Section title={'tomorrow'} data={cardsSorted.tomorrow} />
          <Section title={'done'} data={cardsSorted.done} />

          <ButtonAdd className={s.btn} handleClick={addCard} />
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
