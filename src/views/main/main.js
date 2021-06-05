import Header from '../../components/Header';
import Container from '../../components/Container/Container';
import Section from '../../components/Section';
import s from './main.module.css';


// fake response
const res = {
  title: 'Title',
  data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
};
const { title, data } = res;

export default function MainPage() {
  return (
    <>
      <Header />
      <div className={s.main}>
        <Container>
          <Section title={title} data={data} />
        </Container>
      </div>
    </>
  );
}
