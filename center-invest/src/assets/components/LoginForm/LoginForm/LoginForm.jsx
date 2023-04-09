import { useState } from 'react'
import styles from "./loginForm.module.css";
import { Link } from 'react-router-dom';

  const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@mail.ru' && password === 'admin') {
      window.location.href = '/admin';
    } else {
      setError('Неверные email или пароль');
    }
  };

  return (
    <div className="wrapper_wrapper">
      <div className={styles.image_wrapper}><Link to='/'><img className={styles.image} src="./logo.png" alt="" /></Link></div>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Вход для сотрудников</h1>
          <div className={styles.blank}>
            <label htmlFor="email">Электронная почта</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className={styles.blank}>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          {error && <p>{error}</p>}
          {email === 'admin' && password === 'admin' ? (
            <Link to='/admin' className={styles.button}>Войти</Link>
          ) : (
            <button type="submit" className={styles.button}>Войти</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
