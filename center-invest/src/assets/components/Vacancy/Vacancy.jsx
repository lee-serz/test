import { useState } from 'react'
import styles from "./vacancy.module.css";

function Intership() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>  
        <h2 className={styles.intership}>Вакансии</h2>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.item}>
                    <div id='system-analitycs' className={styles.item__title}>Системный аналитик</div>
                    <ul className={styles.item__description}>
                        <li>Опыт работы с требованиями заказчика, умение задавать правильные вопросы, находить суть и предлагать альтернативные варианты решения задачи</li>
                        <li>Опыт постановки задач и формирования технической документации</li>
                        <li>Опыт анализа и моделирования бизнес-процессов организации</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__title}>Android разработчик</div>
                    <ul className={styles.item__description}>
                        <li>Умеет грамотно продумывать архитектуру приложения, знаком с MVVM, MVI, чистой архитектурой  </li>
                        <li>Уверенно использует Java/Kotlin (на самом деле у нас уже почти все на Kotlin)</li>
                        <li>Знает Jetpack Components (Navigation, ViewModel, LiveData, ViewBinding)</li>
                    </ul>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <div className={styles.item__title}>JAVA разработчик</div>
                    <ul className={styles.item__description}>
                        <li>Навыки самостоятельного программирования на Java</li>
                        <li>Опыт работы с core-библиотеками (JBDC, JAXB, Jackson)</li>
                        <li>Умение работать с любой из СУБД (в идеале с Postgres)</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__title}>Системный администратор </div>
                    <ul className={styles.item__description}>
                        <li>Навыки по обслуживанию баз данных: процедуры резервного копирования, проверки БД, оптимизации</li>
                        <li>Опыт восстановления БД в случае сбоя - логических, физических ошибок</li>
                        <li>Знание SQL (T-SQL)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intership
