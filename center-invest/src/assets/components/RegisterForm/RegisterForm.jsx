import { useState } from 'react'
import styles from "./registerForm.module.css";
import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api.com';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают!');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        email,
        password
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="">
      <div className={styles.center}><img className={styles.image} src="./logo.png" alt="" /></div>
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Регистрация в твой IT старт</h1>
        <div className={styles.blank}>
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className={styles.blank}>
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        
        <div className={styles.blank}>
          <label htmlFor="confirmPassword">Подтверждение пароля</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button className={styles.button} type="submit">Зарегистрироваться</button>
        <a href="#">Войти</a>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;