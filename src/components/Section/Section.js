import s from './section.module.css';

//fake cart
import './fakeCart.css';
const Cart = () => <div className="fakeCart">Cart example</div>;

export default function Section({ title, data }) {
  return (
    <section>
      <h3 className={s.title}>{title}</h3>
      <div className={s.collection}>
        {data.map(el => (
          <Cart data={el} />
        ))}
      </div>
    </section>
  );
}
