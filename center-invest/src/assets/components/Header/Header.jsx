import { useState } from 'react'
import styles from "./header.module.css";

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
        <div className={styles.enterance}>Войти</div>
      </div>
    </div>
  )
}

export default Header
