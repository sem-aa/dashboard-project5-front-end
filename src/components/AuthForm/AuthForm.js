import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Joi from 'joi';
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

    const error = validateUser({ password, email });
    if (error) {
      const message = error.message;
      alert.show(message);
    }

    if (!error) {
      registered
        ? dispatch(authOperations.handleLogIn({ email, password }))
        : dispatch(authOperations.handleSignUp({ email, password }));
      formReset();
    }
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const handleUpdatePassword = e => {
    e.preventDefault();
    dispatch(authOperations.updatePassword(email));
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
            autoComplete="none"
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
            autoComplete="current-password"
          />
        </div>
        <div className={style.btnGo}>
          {registered ? (
            <div className={style.restorePassword}>
              <ButtonGo type="submit" />
              <p className={style.restore}>
                Forgot your password?
                <button onClick={handleUpdatePassword} className={style.btnRestore}>
                  click
                </button>
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

const validateUser = body => {
  const schemaUser = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
    password: Joi.string().min(6).max(20).required(),
  });

  const { error } = schemaUser.validate(body);
  if (error) {
    const [{ message }] = error.details;
    return {
      message,
    };
  }
};

export default AuthForm;
