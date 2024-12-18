import React, { useState, useRef ,useContext} from 'react';
import classes from './AuthForm.module.css';
import AuthProvider from './AuthProvider';
import { AuthContext } from './AuthProvider';

const AuthForm = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

   const ctx=useContext(AuthContext)

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    emailRef.current.value = '';
        passwordRef.current.value = '';
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url
    if (!isLogin)
      {
        url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs_bJk9daTBYGVyxklTixePrZp-DwrL9w`
      } 
      else {
       url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyBs_bJk9daTBYGVyxklTixePrZp-DwrL9w`;
      }
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!';
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const token = data.idToken;
          console.log('Token:', token);
          emailRef.current.value = '';
          passwordRef.current.value = '';
          if(isLogin)
          {
            alert('login Successfully')
            ctx.login(token)
          }
          else{
           alert(" Account Created successfully")
          }
       
          
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error.message);
        });
    }
  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
            disabled={isLoading}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
