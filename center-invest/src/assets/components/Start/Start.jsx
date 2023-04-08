import { useState } from 'react'
import styles from "./start.module.css";

function Start() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>  
        <h1 className={styles.title}>Твой старт в IT</h1>
        <p className={styles.subtitle}>Начни свой путь в IT подразделении лучшем региональном банке</p>
        <div className={styles.button}>Найти стажировку</div>
        <img className={styles.image} src="./start-image.png" alt="" />
    </div>
  )
}

export default Start
