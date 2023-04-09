import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Admin.module.css";

const Admin = () => {
  const [data, setData] = useState([]);

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
        <div>Админ панель</div>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            {item.firstName} {item.lastName} {item.patronymic}
            <button onClick={() => deleteItem(item.id)}>Удалить</button>
          </div>
        ))}
      </div>
  );
};

export default Admin