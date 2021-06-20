import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';
import ButtonGo from '../Buttons/ButtonGo/ButtonGo';
import ButtonSign from '../Buttons/ButtonGo/ButtonSign';
import style from './AuthForm.module.css';
import { useAlert } from 'react-alert';

const AuthForm = ({ registered }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alert = useAlert();
  const dispatch = useDispatch();
  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    if (!email || !password) {
      alert.show('email и пароль - обязательные поля');
      return;
    }

    if (!validateEmail(email)) {
      alert.show('Некорректно введен e-mail.');
    }
    if (!validatePassword(password)) {
      alert.show('Пароль должен содержать от 6 до 16 символов.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      registered
        ? dispatch(authOperations.handleLogIn({ email, password }))
        : dispatch(authOperations.handleSignUp({ email, password }));
      formReset();
    }
  };

  const onRegister = event => {
    event.preventDefault();
    if (!email || !password) {
      alert.show('email и пароль - обязательные поля');
      return;
    }

    if (!validateEmail(email)) {
      alert.show('Некорректно введен e-mail.');
    }
    if (!validatePassword(password)) {
      alert.show('Пароль должен содержать от 6 до 16 символов.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleSignUp({ email, password }));
      formReset();
    }
  };

  const validateEmail = email => {
    // eslint-disable-next-line
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  };

  const validatePassword = password => {
    return Boolean(password.length >= 6 && password.length <= 16);
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={style.landingForm} onSubmit={onSubmit}>
        <div className={style.landingBox}>
          <label htmlFor="AuthorizationForm__email"></label>
          <input
            className={style.landingInput}
            type="email"
            name="email"
            id="AuthorizationForm__email"
            value={email}
            onChange={changeEmailValue}
            placeholder="Email"
          />
        </div>

        <div className={style.landingBox}>
          <label htmlFor="AuthorizationForm__password"></label>
          <input
            className={style.landingInput}
            name="password"
            id="AuthorizationForm__password"
            value={password}
            onChange={changePasswordValue}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className={style.btnGo}>
          {registered ? (
            <div className={style.restorePassword}>
              <ButtonGo type="submit" />
              <p className={style.restore}>
                Forgot your password?
                <button className={style.btnRestore}>click</button>
              </p>
            </div>
          ) : (
            <ButtonSign type="submit" />
          )}
        </div>
      </form>
    </>
  );
};

export default AuthForm;
