
import styles from "./test.module.css";
import React, { useState, useEffect } from 'react';
// import Question from './Question';

function Test() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // получение данных о вопросах и вариантах ответов из бекенда Kotlin через API
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  function handleSubmit() {
    // обработка результатов теста и отображение их на странице
  }

  return (
    <div>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Test;