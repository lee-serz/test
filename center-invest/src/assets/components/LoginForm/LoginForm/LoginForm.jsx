import { useState } from 'react'
import styles from "./loginForm.module.css";
import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api.com';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="">
      <div className={styles.image_wrapper}><img className={styles.image} src="./logo.png" alt="" /></div>
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1>Вход в твой IT старт</h1>
        <div className={styles.blank}>
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles.blank}>
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className={styles.button} type="submit">Войти</button>
        <a href="#">Зарегистрироваться</a>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;