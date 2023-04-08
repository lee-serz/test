import { useState } from 'react'
import styles from "./register.module.css";
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm/LoginForm';

function Register() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
        <LoginForm />
    </div>
  )
}

export default Register