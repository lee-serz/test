import { useState, useRef } from 'react'
import styles from "./start.module.css";

function Start(props) {
  const [count, setCount] = useState(0)
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  const handleButtonClick = () => {
    props.handleScrollToTarget();
  }

  return (
    <div className={styles.wrapper}>  
        <h1 className={styles.title}>Твой старт в IT</h1>
        <p className={styles.subtitle}>Начни свой путь в IT подразделении лучшем региональном банке</p>
        <a href="#target" className={styles.button}>Найти стажировку</a>
        <img className={styles.image} src="./start-image.png" alt="" />
    </div>
  )
}

export default Start
