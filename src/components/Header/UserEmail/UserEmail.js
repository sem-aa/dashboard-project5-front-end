import { useSelector } from 'react-redux';
import { getUserEmail } from '../../../redux/selectors';
import style from './UserEmail.module.css';

const UserEmail = () => {
  const email = useSelector(getUserEmail);
  const firstLeterEmail = email[0].toUpperCase();
  return (
    <div className={style.user}>
      <div className={style.user__logo}>{firstLeterEmail}</div>
      <div className={style.user__email}>{email} Quest Log</div>
    </div>
  );
};

export default UserEmail;
