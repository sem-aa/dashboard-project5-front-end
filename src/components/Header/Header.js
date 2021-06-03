import Container from '../Container/Container';
import Logo from './Logo';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Logo />
        </div>
      </Container>
    </header>
  );
};

export default Header;
