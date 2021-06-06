import Container from '../Container/Container';
import Logo from './Logo';
import UserEmail from './UserEmail';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Logo />
          <UserEmail />
        </div>
      </Container>
    </header>
  );
};

export default Header;
