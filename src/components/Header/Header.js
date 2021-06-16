import Container from '../Container/Container';
import Logo from './Logo';
import UserEmail from './UserEmail';
import LogoutBtn from './LogoutBtn';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <Logo />
          <UserEmail />
          <LogoutBtn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
