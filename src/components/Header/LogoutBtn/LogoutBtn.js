import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/operations/authOperetions';
import sprite from '../../../icon/sprite.svg';
import s from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button className={s.btn} type="button" onClick={() => dispatch(authOperations.handleLogOut())}>
      <svg width="21" height="16">
        <use className={s.icon} href={sprite + '#icon-logout'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
