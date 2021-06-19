import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from '../../redux/selectors';
import authOperations from '../../redux/operations/authOperations';
import ButtonGo from '../Buttons/ButtonGo/ButtonGo';
import style from './AuthForm.module.css';
import { useAlert } from 'react-alert';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alert = useAlert();
  const error = useSelector(getError);
  const dispatch = useDispatch();
  console.log(error);
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
    // if (error) {
    //   alert.show(error)

    // }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleLogIn({ email, password }));
      formReset();
    }
  };

  // const onRegistration = () => {
  //   if (!email || !password) {
  //     alert.show('email и пароль - обязательные поля');
  //     return;
  //   }

  //   if (!validateEmail(email)) { alert.show('Некорректно введен e-mail.') }
  //   if (!validatePassword(password)) { alert.show('Пароль должен содержать от 6 до 16 символов.') }

  //   if (validateEmail(email) && validatePassword(password)) {
  //     dispatch(authOperations.handleSignUp({ email, password }));
  //     formReset();
  //   }
  // };

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

  // const errorMessage = () => {
  //   if (error === '') {
  //     return 'Пользователь с таким email уже зарегистрирован';
  //   } else if (error === 'Email or password is wrong') {
  //     alert.show('Некорректный пароль или email')
  //   }
  // };

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
          <ButtonGo type="submit" />
          {/* <ButtonSign type="button" handleSignUp={onRegistration} /> */}
        </div>
        {/* {error && <p style={{ color: 'black' }}>{errorMessage()}</p>} */}
      </form>
    </>
  );
};

export default AuthForm;
