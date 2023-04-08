import { useState } from 'react'
import axios from "axios";
import styles from './form.module.css'
import Test from '../../components/TestPage/Test';



const Form = () => {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthday, setBirthday] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [target, setTarget] = useState("");
  const [region, setRegion] = useState("");
  const [documents, setDocuments] = useState("");
  const [direction, setDirection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      lastName,
      name,
      patronymic,
      birthday,
      placeOfBirth,
      phone,
      number,
      email,
      telegram,
      target,
      region,
      documents,
      direction
    };

    axios.post("YOUR_API_ENDPOINT", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className={styles.wrapper}>
        <div className={styles.box1}>
            <div className={styles.box__title}>Заявка</div>
            <div className={styles.direction}>
                <label htmlFor="direction">Направление стажировки</label>
                <input
                type="text"
                id="direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                />
            </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form__container}>
            <div className={styles.personal__data}>
                <p>Личные данные</p>
                <div className={styles.data}>
                    <div className={styles.blank}>
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="name">Имя</label>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="patronymic">Отчество</label>
                        <input
                        type="text"
                        id="patronymic"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="birthday">Дата рождения</label>
                        <input
                        type="date"
                        id="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="placeOfBirth">Место рождения</label>
                        <input
                        type="text"
                        id="placeOfBirth"
                        value={placeOfBirth}
                        onChange={(e) => setPlaceOfBirth(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <p>Контактные данные</p>
                <div className={styles.contact}>
                    <div className={styles.blank}>
                        <label htmlFor="phone">Номер телефона</label>
                        <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                    <label htmlFor="email">Электронная почта</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.blank}>
                        <label htmlFor="telegram">Telegram</label>
                        <input
                        type="text"
                        id="telegram"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        />
                    </div>
                </div>
            </div>
           <div className={styles.target}>
            <p> Направление обращения </p>
             <div className={styles.blank}>
                    <label htmlFor="target">Цель обращения</label>
                    <input
                    type="text"
                    id="target"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    />
                </div> <br />
                <div className={styles.blank}>
                    <label htmlFor="region">Желаемый регион прохождения практики</label>
                    <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    >
                    <option value="">--Выбрать регион--</option>
                    <option value="region1">Ростовская область</option>
                    <option value="region2">Краснодарский край</option>
                    <option value="region3">Ставропольский край</option>
                    <option value="region4">Волгоградская область</option>
                    </select>
                </div><br />
                <div  className={styles.documets}>
                    <label>Вы подавали документы ранее?</label>
                    <div>
                    <label htmlFor="document1">
                        <input
                        type="radio"
                        id="documents_false"
                        name="documents"
                        value="1"
                        checked={documents === "1"}
                        onChange={(e) => setDocuments(e.target.value)}
                        />
                        Да
                    </label>
                    </div>
                    <div>
                        <label htmlFor="document2">
                            <input
                            type="radio"
                            id="documents_true"
                            name="documents"
                            value="0"
                            checked={documents === "0"}
                            onChange={(e) => setDocuments(e.target.value)}
                            />
                            Нет
                        </label>
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