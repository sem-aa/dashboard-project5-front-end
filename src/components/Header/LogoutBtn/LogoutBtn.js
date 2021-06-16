import { useDispatch } from 'react-redux';
import authOperations from '../../../redux/operations/authOperations';
import sprite from '../../../icon/sprite.svg';
import style from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button className={style.btn} type="button" onClick={() => dispatch(authOperations.handleLogOut())}>
      <svg width="21" height="16">
        <use className={style.icon} href={sprite + '#icon-logout'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
