import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/loginComponent.module.scss';
import { registerAction, loginUserAction } from '../actions/profileActions';

export default function LoginComponent() {
  const [loginFormState, setLoginFormState] = useState('login');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [firstNameRegister, setFirstNameRegister] = useState('');
  const [lastNameRegister, setLastNameRegister] = useState('');
  const [registerError, setRegisterError] = useState(false);
  const dispatch = useDispatch();

  const checkRegisterSet = () => {
    if (
      emailRegister !== '' &&
      passwordRegister !== '' &&
      firstNameRegister !== '' &&
      lastNameRegister !== ''
    ) {
      dispatch(
        registerAction(
          emailRegister,
          passwordRegister,
          firstNameRegister,
          lastNameRegister
        )
      );
    } else {
      setRegisterError(true);
      setTimeout(() => {
        setRegisterError(false);
      }, 2000);
    }
  };

  const resetRegisterInput = () => {
    setEmailRegister('');
    setPasswordRegister('');
    setFirstNameRegister('');
    setLastNameRegister('');
  };

  return (
    <div className={styles.outerBox}>
      {loginFormState === 'login' ? (
        <>
          <div className={styles.box}>
            <h2>Please login to purchase items!</h2>
            <div className={styles.inlineElements}>
              <p>Email:</p>
              <input
                onChange={(e) => setEmailLogin(e.target.value)}
                value={emailLogin}
              ></input>
              <p>Password:</p>
              <input
                onChange={(e) => setPasswordLogin(e.target.value)}
                value={passwordLogin}
              ></input>
              <button
                onClick={() => {
                  dispatch(loginUserAction(emailLogin, passwordLogin));
                }}
              >
                Login
              </button>
              <br></br>
              <p>New customer?</p>
              <h4
                onClick={() => {
                  setLoginFormState('register');
                }}
              >
                Register
              </h4>
            </div>
          </div>
        </>
      ) : loginFormState === 'register' ? (
        <>
          <div className={styles.box}>
            <h2>Please register to purchase items!</h2>
            <div className={styles.inlineElements}>
              <p>First Name:</p>
              <input
                onChange={(e) => setFirstNameRegister(e.target.value)}
                value={firstNameRegister}
              ></input>
              <p>Last Name:</p>
              <input
                onChange={(e) => setLastNameRegister(e.target.value)}
                value={lastNameRegister}
              ></input>
              <p>Email:</p>
              <input
                onChange={(e) => setEmailRegister(e.target.value)}
                value={emailRegister}
              ></input>
              <p>Password:</p>
              <input
                onChange={(e) => setPasswordRegister(e.target.value)}
                value={passwordRegister}
              ></input>
              <button
                onClick={() => {
                  checkRegisterSet();
                }}
              >
                Register
              </button>
              {registerError ? (
                <>
                  <p>Please enter your credentials into the form!</p>
                </>
              ) : null}
              <br></br>
              <p>Already a customer?</p>
              <h4
                onClick={() => {
                  setLoginFormState('login');
                  resetRegisterInput();
                }}
              >
                Login
              </h4>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
