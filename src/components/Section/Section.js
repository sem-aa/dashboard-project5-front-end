import s from './section.module.css';

//fake cart
import './fakeCard.css';
const Card = data => <div className="fakeCard">{JSON.stringify(data)}</div>;

export default function Section({ title, data }) {
  return (
    <section className={s.section}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.collection}>
        {data.map(el => (
          <Card data={el} key={el._id} />
        ))}
      </div>
    </section>
  );
}
