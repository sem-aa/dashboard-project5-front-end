import { useSelector } from 'react-redux';
import { getUserEmail } from '../../../redux/selectors/authSelectors';
import s from './UserEmail.module.css';

const UserEmail = () => {
  const email = useSelector(getUserEmail);
  const firstLeterEmail = email[0].toUpperCase();
  return (
    <div className={s.user}>
      <div className={s.user__logo}>{firstLeterEmail}</div>
      <div className={s.user__email}>{email} Quest Log</div>
    </div>
  );
};

export default UserEmail;
