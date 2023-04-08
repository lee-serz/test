import React from 'react';

function AnswerOption({ answerOption, selected, onSelect }) {
  function handleSelect() {
    onSelect(answerOption.id);
  }

  return (
    <li>
      <label>
        <input
          type="radio"
          value={answerOption.id}
          checked={selected}
          onChange={handleSelect}
        />
        {answerOption.text}
      </label>
    </li>
  );
}

export default AnswerOption;