import { useState } from 'react'
import axios from "axios";
import styles from './form.module.css'
import Test from '../../components/TestPage/Test';



const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        dateOfBirth: '',
        placeOfBirth: '',
        phone: '',
        email: '',
        telegram: '',
        specialty: '',
        comment: '',
        preferredRegion: '',
        appliedBefore: false,
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://45.145.65.252:9090/api/forms', formData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setFormData({
          ...formData,
          [name]: value
        });
      };

  return (
    <div className={styles.wrapper}>
        <form form onSubmit={handleSubmit} className={styles.form__container}>
        <div className={styles.box1}>
            <div className={styles.box__title}>Заявка</div>
            <div className={styles.direction}>
                <label htmlFor="comment">Направление стажировки:</label>
                <textarea id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></textarea><br /><br />
            </div>
        </div>

            <div className={styles.personal__data}>
                <p>Личные данные</p>
                <div className={styles.data}>
                    <div className={styles.blank}>
                    <label htmlFor="lastName">Фамилия:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required /><br /><br />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="firstName">Имя:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required /><br /><br />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="patronymic">Отчество:</label>
                        <input type="text" id="patronymic" name="patronymic" value={formData.patronymic} onChange={handleInputChange} /><br /><br />
                    </div>

                    <div className={styles.blank}>
                        <label htmlFor="dateOfBirth">Дата рождения:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="placeOfBirth">Место рождения:</label>
                        <input type="text" id="placeOfBirth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} required /><br /><br />
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <p>Контактные данные</p>
                <div className={styles.contact}>
                    <div className={styles.blank}>
                        <label htmlFor="phone">Телефон:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required /><br /><br />
                    </div>
                    
                    <div className={styles.blank}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required /><br /><br />
                    </div>

                    <div className={styles.blank}>
                        <label htmlFor="telegram">Telegram:</label>
                        <input type="text" id="telegram" name="telegram" value={formData.telegram} onChange={handleInputChange} /><br /><br />
                    </div>
                </div>
            </div>
           <div className={styles.target}>
            <p> Направление обращения </p>
             <div className={styles.blank}>
                    <label htmlFor="specialty">Цель обращения:</label>
                    <input type="text" id="specialty" name="specialty" value={formData.specialty} onChange={handleInputChange} required /><br /><br />
                </div> <br />
                <div className={styles.blank}>
                    <label htmlFor="preferredRegion">Предпочитаемый регион:</label>
                    <input type="text" id="preferredRegion" name="preferredRegion" value={formData.preferredRegion} onChange={handleInputChange} required /><br /><br />
                </div><br />

                <div  className={styles.documets}>
                     <label htmlFor="appliedBefore">Ранее подавализаявку?</label>
                     <input type="checkbox" id="appliedBefore" name="appliedBefore" checked={formData.appliedBefore} onChange={handleInputChange} /><br /><br />
                <div>
                </div>
            </div>

           </div>
           <div className={styles.buttons}>
           <Test></Test>
            <button className={styles.btn} type="submit">Сохранить</button>
           </div>
        </form>
       
    </div>
    
    );
};
export default Form