import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/operations/authOperetions';
import ButtonGo from '../Buttons/ButtonGo/ButtonGo';
import s from './AuthForm.module.css';

const AuthForm = () => {
  const user = useSelector(state => state.auth.user.email)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    if (email && password) {

      try { dispatch(authOperations.handleLogIn({ email, password })) } catch {
        dispatch(authOperations.handleSignUp({ email, password }))
      }

      formReset()
    }
  };

  // const onRegistration = () => {
  //   if (email && password) {
  //     dispatch(authOperations.handleSignUp({ email, password }));
  //     formReset();
  //     console.log(user);
  //   }
  // };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form className={s.landingForm} onSubmit={onSubmit}>
        <div className={s.landingBox}>
          <label htmlFor="AuthorizationForm__email">
          </label>
          <input
            className={s.landingInput}
            type="email"
            name="email"
            id="AuthorizationForm__email"
            value={email}
            onChange={changeEmailValue}
            placeholder="Email"
          />
        </div>
        <div className={s.landingBox}>
          <label htmlFor="AuthorizationForm__password">
          </label>
          <input
            className={s.landingInput}
            type="password"
            name="password"
            id="AuthorizationForm__password"
            value={password}
            onChange={changePasswordValue}
            placeholder="Password"
          />
        </div>
        <div className={s.btnGo}>
          <ButtonGo
            type="submit"
          // onClick={onRegistration}
          />
        </div>
      </form>
    </>
  );
};

export default AuthForm;