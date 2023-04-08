import { useState } from 'react'
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>  
      <div className={styles.header}>
        <img src="./logo.png" alt="" className={styles.logo} />
        <div className={styles.menu}>
          <div className={styles.menu__item}>Стажировки</div>
          <div className={styles.menu__item}>Практики</div>
          <div className={styles.menu__item}>Вакансии</div>
        </div>
        <Link className={styles.enterance} to='/login'>Войти</Link>
      </div>
    </div>
  )
}

export default Header
