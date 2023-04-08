import React, {useState} from 'react'
import styles from './flipcard.module.css'

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    };

  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
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
                    <br />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlipCard