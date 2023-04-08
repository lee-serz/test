import { useState } from 'react'
import styles from "./intership.module.css";

function Intership() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>  
        <h2 className={styles.intership}>Стажировки</h2>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.item}>
                    <div className={styles.item__title}>Системный аналитик</div>
                    <ul className={styles.item__description}>
                        <li>Автоматизация финансового мониторинга</li>
                        <li>Развитие дистанционных сервисов (интернет-банк и мобильный банк)</li>
                        <li>Автоматизация кредитов</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__title}>Администратор баз данных</div>
                    <ul className={styles.item__description}>
                        <li>Знание технологий повышения доступности БД  </li>
                        <li>Знание технологий повышения доступности БД Database Mirroring, AlwaysOn Availability Groups.</li>
                        <li>Знание SQL (T-SQL)</li>
                    </ul>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <div className={styles.item__title}>IOS разработчик</div>
                    <ul className={styles.item__description}>
                        <li>Занимались iOS-разработкой больше 2 лет и понимание CI/CD</li>
                        <li>Знание Swift, Xсode и инструменты GCD</li>
                        <li>Знание с MVP и MVVM</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__title}>Разработчик баз данных</div>
                    <ul className={styles.item__description}>
                        <li>Знание SQL, PL/SQL на хорошем уровне</li>
                        <li>Знание основ проектирования реляционных базы данных</li>
                        <li>Понимание работы индексов</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intership
