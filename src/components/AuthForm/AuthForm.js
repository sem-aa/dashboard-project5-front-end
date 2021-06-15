import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from '../../redux/selectors';
import authOperations from '../../redux/operations/authOperations';
import ButtonGo from '../Buttons/ButtonGo/ButtonGo';
import ButtonSign from '../Buttons/ButtonGo/ButtonSign';
import s from './AuthForm.module.css';

// =================ALRT========================
import Alert from './Alert';
import { CSSTransition } from 'react-transition-group';
import st from './Alert/Alert.module.css';
// ---------------------------------------------

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [message, setMessage] = useState([])

  // =================ALRT========================
  const [isError, setIsError] = useState(false);
  const getAlert = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), 3000);
  };
  const showAlert = (setstate, message) => {
    setstate(message);
    getAlert();
  };

  // ---------------------------------------------
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    !validateEmail(email)
      ? showAlert(setEmailError, 'Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? showAlert(setPasswordError, 'Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    !email && showAlert(setEmailError, 'email - обязательное поле');
    !password && showAlert(setPasswordError, 'пароль - обязательное поле');

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleLogIn({ email, password }));
      formReset();
    }
  };

  const onRegistration = () => {
    !validateEmail(email)
      ? showAlert(setEmailError, 'Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? showAlert(setPasswordError, 'Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');
    !email && showAlert(setEmailError, 'email - обязательное поле');
    !password && showAlert(setPasswordError, 'пароль - обязательное поле');

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleSignUp({ email, password }));
      formReset();
    }
  };

  const validateEmail = email => {
    // eslint-disable-next-line
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    return Boolean(password.length >= 4 && password.length <= 16);
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const errorMessage = () => {
    if (error === 'Request failed with status code 409') {
      return 'Пользователь с таким email уже зарегистрирован';
    } else if (error === 'Request failed with status code 403') {
      return 'Некорректный пароль или email';
    }
  };

  return (
    <>
      <form className={s.landingForm} onSubmit={onSubmit}>
        <div className={s.landingBox}>
          <label htmlFor="AuthorizationForm__email">
            {emailError && <span style={{ color: 'red' }}>*</span>}
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

          {/* =================ALRT======================== */}
          {emailError && <Alert text={emailError} errorStatus={isError} />}
          {/* ============================================== */}
        </div>

        <div className={s.landingBox}>
          <label htmlFor="AuthorizationForm__password">
            {passwordError && <span style={{ color: 'red' }}>*</span>}
          </label>
          <input
            className={s.landingInput}
            name="password"
            id="AuthorizationForm__password"
            value={password}
            onChange={changePasswordValue}
            type="password"
            placeholder="Пароль"
          />

          {/* =================ALRT======================== */}
          {passwordError && <Alert text={passwordError} errorStatus={isError} />}
          {/* ============================================== */}
        </div>
        <div className={s.btnGo}>
          <ButtonGo type="submit" />
          <ButtonSign type="button" handleSignUp={onRegistration} />
        </div>
        {error && (
          <CSSTransition in={isError} classNames={st} unmountOnExit timeout={250}>
            <p style={{ color: 'black' }}>{errorMessage()}</p>
          </CSSTransition>
        )}
      </form>
    </>
  );
};

export default AuthForm;

