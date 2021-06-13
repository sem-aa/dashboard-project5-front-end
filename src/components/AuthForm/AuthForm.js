import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperetions';
import ButtonGo from '../Buttons/ButtonGo/ButtonGo';
import s from './AuthForm.module.css';

import { getError } from '../../redux/selectors'
import { useSelector } from 'react-redux';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const error = useSelector(getError)




  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {

    event.preventDefault();
    if (email && password) {
      dispatch(authOperations.handleLogIn({ email, password }))
      formReset()
    }

  };


  const onRegistration = () => {
    if (email && password) {
      dispatch(authOperations.handleSignUp({ email, password }));
      formReset();

    }
  };

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
          <button>
            Register
          </button>
        </div>
      </form>
    </>
  );
};


export default AuthForm;
