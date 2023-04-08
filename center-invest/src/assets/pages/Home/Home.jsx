import { useState } from 'react'
import styles from "./home.module.css";
import Header from '../../components/Header/Header';
import Start from '../../components/Start/Start'
import Intership from '../../components/Intership/Intership';
import Vacancy from '../../components/Vacancy/Vacancy';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Start></Start>
      <Intership></Intership>
      <Vacancy></Vacancy>
    </div>
  )
}

export default Home
