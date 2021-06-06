import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import authOperations from '../redux/operations/authOperetions';

const TestAuthForm = () => {
 const cards = useSelector(state => state.auth.user.cards)
 const id = useSelector(state => state.auth.user.id)
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  
  const onSubmit = event => {
    event.preventDefault();

    if (email && password) {
      dispatch(authOperations.handleLogIn({
        email, password
      }))
      formReset()
    }
};

  const onRegistration = () => {
    if (email && password) {
      dispatch(authOperations.handleSignUp({ email, password }));
      formReset();
      console.log(user);
    }
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form  onSubmit={onSubmit}>
            <label htmlFor="AuthorizationForm__email">
            </label>
            <input
              type="email"
              name="email"
              id="AuthorizationForm__email"
              value={email}
              onChange={changeEmailValue}
            />    
                
            <label htmlFor="AuthorizationForm__password">
              </label>
                 <input
                name="password"
                id="AuthorizationForm__password"
                value={password}
                onChange={changePasswordValue}
                

              />
          <button type="submit" >
            Войти
          </button>
          <button
            type="button"
            
            onClick={onRegistration}
          >
            Регистрация
          </button>
    
        <h2> id {id}</h2>

        {cards ? cards.map(card =>
          <div>
          <p>{card.title}</p>
            <p>{card.difficulty}</p>
            <p>{card.category}</p>
            <p>{card.date}</p>
            <p>{card.time}</p>
            <p>{card.status}</p>
            <p>{card.type}</p>
            <p>{card._id}</p>
          </div>
         ) : <h1>No cards</h1>}
        
      </form>   
    </>
  );
};

export default TestAuthForm;