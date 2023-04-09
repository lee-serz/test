import { useState } from 'react'
import styles from "./vacancy.module.css";
import { Link } from 'react-router-dom';

function Vacancy() {
    const [count, setCount] = useState(0)
   
  return (
    <div className={styles.wrapper}>  
        <h2 className={styles.intership}>Вакансии</h2>
        <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={styles.row}>
                <a href="https://rostov.hh.ru/vacancy/78032434?from=vacancy_search_list" target="_blank" id={styles.firstCard} className={styles.card}>
                        <div className={styles.front}>
                            <h3 className={styles.cardTitle}>Системный <br /> аналитик</h3>
                            <img  className={styles.cardImage} src="./vacancy1.svg" alt="" />
                        </div>
                </a>
                <a href="https://rostov.hh.ru/vacancy/77013167?from=vacancy_search_list" target="_blank" id={styles.firstCard} className={styles.card}> 
                        <div className={styles.front}>
                            <h3 className={styles.cardTitle}>Android <br /> разработчик</h3>
                            <img className={styles.cardImage} src="./vacancy2.svg" alt="" />
                        </div>
                </a>
            
                <a href="https://rostov.hh.ru/vacancy/79001668?from=vacancy_search_list" target="_blank" id={styles.firstCard} className={styles.card}> 
                        <div className={styles.front}>
                            <h3 className={styles.cardTitle}>Java <br /> разработчик</h3>
                            <img className={styles.cardImage} src="./vacancy3.svg" alt="" />
                        </div>
                </a>
                </div>
                </div>
            </div>
            </div>
  )
}

export default Vacancy