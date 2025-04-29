import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Question = ({ question, selectedAnswer, onAnswerSelect }) => {
  const { currentLanguage } = useContext(LanguageContext);

  // Get the question text in the current language
  const questionText = question?.text[currentLanguage] || '';

  const handleOptionClick = (index) => {
    onAnswerSelect(index);
  };

  if (!question) return null;

  return (
    <div className="question-container">
      <div className="question-text">
        {questionText}
      </div>

      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            className={`option ${selectedAnswer === index ? 'selected' : ''}`}
            key={index}
            onClick={() => handleOptionClick(index)}
          >
            <label className="option-label">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={selectedAnswer === index}
                onChange={() => handleOptionClick(index)}
              />
              <span className="option-text">
                {option.text[currentLanguage]}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;