import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Admin.module.css";

const Admin = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [requirements, setRequirements] = useState('');


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://45.145.65.252:9090/api/forms');
      setData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`http://45.145.65.252:9090/api/forms/${id}`);
      setSelectedUser(response.data);
      setShowDetails((prevState) => !prevState); 
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
    }
  };

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://45.145.65.252:9090/internships/create', {
        title,
        requirements,
      });
      setTitle('');
      setRequirements('');
      setShowForm(false);
    } catch (error) {
      console.error('Ошибка при создании стажировки:', error);
    }
  };
  

  

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://45.145.65.252:9090/api/tests/${id}`);
      // Обновление списка после удаления элемента
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении элемента:', error);
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.adminPanel}>Админ панель</div>
      <button className={styles.createButton} onClick={toggleForm}>Создать стажировку</button>
    {showForm && (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Название стажировки:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="requirements">Требования:</label>
        <textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
        <br />
        <button type="submit">Отправить</button>
      </form>
    )}
    
      {data.map((item) => (
      <div
        key={item.id}
        className={styles.item}
        onClick={() => fetchUserById(item.id)}
      >
        {item.firstName} {item.lastName} {item.patronymic}
        <button className={styles.deleteButton} onClick={() => deleteItem(item.id)}>Удалить</button>
      </div>
    ))}
    {selectedUser && showDetails && (
      <div>
        <h3>Выбранный пользователь:</h3>
        <p>Выбранное напрвление: {selectedUser.comment}</p>
        <p>Имя: {selectedUser.firstName}</p>
        <p>Фамилия: {selectedUser.lastName}</p>
        <p>Отчество: {selectedUser.patronymic}</p>
        <p>Дата рождения: {selectedUser.dateOfBirth}</p>
        <p>Место рождения: {selectedUser.placeOfBirth}</p>
        <p>Номер телефона: {selectedUser.phone}</p>
        <p>Эл. почта: {selectedUser.email}</p>
        <p>Никнейм в telegram: {selectedUser.telegram}</p>
        <p>Цель обращения: {selectedUser.specialty}</p>
        <p>Регион прохождения стажировки:{selectedUser.preferredRegion}</p>
        <p>Подавал ли документы ранее: {selectedUser.appliedBefore}</p>
      </div>
    )}
  </div>
);
};

export default Admin