import { useState,useEffect, useRef } from 'react'
import styles from "./intership.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Intership() {
    const [isFlipped1, setIsFlipped1] = useState(false);
 
    const handleCardClick1 = () => {
      setIsFlipped1(!isFlipped1);
    };

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        axios.get('http://45.145.65.252:9090/internships/all')
          .then(response => {
            setInternships(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

  return (
    <div className={styles.wrapper}>  
        <h2 id={styles.target} className={styles.intership}>Стажировки</h2>
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                    
                       
                {internships.map(internship => (
                <div className={`${styles.card} ${isFlipped1 ? styles.flipped : ''}`} onClick={handleCardClick1}>
                    <div className={styles.front}>         
                        <div key={internship.id}>
                            <h3 className={styles.cardTitle}>{internship.title}</h3>   
                            <img className={styles.cardImage} src="./card-analytics.svg" alt="" />             
                        </div> 
                    </div>

                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>{internship.title}</h3>
                        <div className={styles.item__description}>
                            <p>{internship.requirements}</p>
                        </div>   
                        <Link to='/form' className={styles.request}>Подать заявку</Link>
                    </div>
                </div>
                ))}
            
        </div>
    </div>
    </div>
  )
}

export default Intership