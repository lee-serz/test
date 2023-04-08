import { useState } from 'react'
import styles from "./vacancy.module.css";
import { Link } from 'react-router-dom';

function Vacancy() {
    const [count, setCount] = useState(0)
    const [isFlipped5, setIsFlipped5] = useState(false);
    const [isFlipped6, setIsFlipped6] = useState(false);
    const [isFlipped7, setIsFlipped7] = useState(false);
    const [isFlipped8, setIsFlipped8] = useState(false);
  
    const handleCard1Click1 = () => {
      setIsFlipped5(!isFlipped5);
    };
    const handleCard1Click2 = () => {
      setIsFlipped6(!isFlipped6);
    };
    const handleCard1Click3 = () => {
      setIsFlipped7(!isFlipped7);
    };
    const handleCard1Click4 = () => {
      setIsFlipped8(!isFlipped8);
    };
  return (
    <div className={styles.wrapper}>  
        <h2 className={styles.intership}>Вакансии</h2>
        <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={styles.row}>
            <div className={`${styles.card} ${isFlipped5 ? styles.flipped : ''}`} onClick={handleCard1Click1}>
                <div className={styles.front}>
                <h3 className={styles.cardTitle}>Системный аналитик</h3>
                <img className={styles.cardImage} src="./card-analytics.svg" alt="" />
                </div>
                <div className={styles.back}>
                <div className={styles.content}>
                    <h3 className={styles.cardTitle}>Системный аналитик</h3>
                    <ul className={styles.item__description}>
                        <li>Занимались iOS-разработкой больше 2 лет и понимание CI/CD</li>
                        <li>Знание Swift, Xсode и инструменты GCD</li>
                        <li>Знание с MVP и MVVM</li>
                    </ul>
                    <Link to='/form' className={styles.request}>Подать заявку</Link>
                    <br />
                </div>
                </div>
            </div>
            <div className={`${styles.card} ${isFlipped6 ? styles.flipped : ''}`} onClick={handleCard1Click2}>
                <div className={styles.front}>
                <h3 className={styles.cardTitle}>Системный аналитик</h3>
                <img className={styles.cardImage} src="./db.svg" alt="" />
                </div>
                <div className={styles.back}>
                <div className={styles.content}>
                    <h3 className={styles.cardTitle}>Системный аналитик</h3>
                    <ul className={styles.item__description}>
                        <li>Занимались iOS-разработкой больше 2 лет и понимание CI/CD</li>
                        <li>Знание Swift, Xсode и инструменты GCD</li>
                        <li>Знание с MVP и MVVM</li>
                    </ul>
                    <Link to='/form' className={styles.request}>Подать заявку</Link>
                    <br />
                </div>
                </div>
            </div>
            </div>
            <div className={styles.row}>
            <div className={`${styles.card} ${isFlipped7 ? styles.flipped : ''}`} onClick={handleCard1Click3}>
                <div className={styles.front}>
                <h3 className={styles.cardTitle}>Системный аналитик</h3>
                <img className={styles.cardImage} src="./db.svg" alt="" />
                </div>
                <div className={styles.back}>
                <div className={styles.content}>
                    <h3 className={styles.cardTitle}>Системный аналитик</h3>
                    <ul className={styles.item__description}>
                        <li>Занимались iOS-разработкой больше 2 лет и понимание CI/CD</li>
                        <li>Знание Swift, Xсode и инструменты GCD</li>
                        <li>Знание с MVP и MVVM</li>
                    </ul>
                    <Link to='/form' className={styles.request}>Подать заявку</Link>
                    <br />
                </div>
                </div>
            </div>
            <div className={`${styles.card} ${isFlipped8 ? styles.flipped : ''}`} onClick={handleCard1Click4}>
                <div className={styles.front}>
                <h3 className={styles.cardTitle}>Системный аналитик</h3>
                <img className={styles.cardImage} src="./createdb.svg" alt="" />
                </div>
                <div className={styles.back}>
                <div className={styles.content}>
                    <h3 className={styles.cardTitle}>Системный аналитик</h3>
                    <ul className={styles.item__description}>
                        <li>Занимались iOS-разработкой больше 2 лет и понимание CI/CD</li>
                        <li>Знание Swift, Xсode и инструменты GCD</li>
                        <li>Знание с MVP и MVVM</li>
                    </ul>
                    <Link to='/form' className={styles.request}>Подать заявку</Link>
                    <br />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Vacancy