import { useState } from 'react'
import styles from "./intership.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Intership() {
    const [count, setCount] = useState(0)
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
  
    const handleCardClick1 = () => {
      setIsFlipped1(!isFlipped1);
    };
    const handleCardClick2 = () => {
      setIsFlipped2(!isFlipped2);
    };
    const handleCardClick3 = () => {
      setIsFlipped3(!isFlipped3);
    };
    const handleCardClick4 = () => {
      setIsFlipped4(!isFlipped4);
    };

  

function CardComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://example.com/data');
      setData(result.data);
    };

    fetchData();
  }, []);


  const isFlipped1 = true; // set flip state here
  return (
    <div className={styles.wrapper}>  
        <h2 className={styles.intership}>Стажировки</h2>
        <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={styles.row}>
            <div className={`${styles.card} ${isFlipped1 ? styles.flipped : ''}`} onClick={handleCardClick1}>
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
            <div className={`${styles.card} ${isFlipped2 ? styles.flipped : ''}`} onClick={handleCardClick2}>
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
            <div className={`${styles.card} ${isFlipped3 ? styles.flipped : ''}`} onClick={handleCardClick3}>
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
            <div className={`${styles.card} ${isFlipped4 ? styles.flipped : ''}`} onClick={handleCardClick4}>
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
}
export default Intership