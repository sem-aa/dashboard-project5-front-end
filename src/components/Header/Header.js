import Container from '../Container/Container';
import Logo from './Logo';
import UserEmail from './UserEmail';
import LogoutBtn from './LogoutBtn';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Logo />
          <UserEmail />
          <LogoutBtn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
