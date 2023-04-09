import React, { useState } from 'react';
import AnswerOption from './AnswerOption.jsx';

function Question({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function handleAnswerSelect(answer) {
    setSelectedAnswer(answer);
  }

  return (
    <div>
      <div>test</div>
      <h2>{question.text}</h2>
      <ul>
        {question.answerOptions.map(answerOption => (
          <AnswerOption
            key={answerOption.id}
            answerOption={answerOption}
            selected={selectedAnswer === answerOption.id}
            onSelect={handleAnswerSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default Question