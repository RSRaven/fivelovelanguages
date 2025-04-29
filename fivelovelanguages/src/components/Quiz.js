import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Question from './Question';

const Quiz = ({ questions }) => {
  const { t } = useContext(LanguageContext);
  const { answers, saveAnswer, calculateResults } = useContext(UserContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const answeredQuestions = questions.filter(q =>
      answers.some(a => a.questionId === q.id)
    );

    if (answeredQuestions.length < questions.length) {
      setShowError(true);
      return;
    }

    // Calculate results
    calculateResults(questions);

    // Navigate to results page
    navigate('/results');
  };

  const getCurrentAnswer = () => {
    const found = answers.find(a => a.questionId === questions[currentQuestion]?.id);
    return found ? found.choice : null;
  };

  const handleAnswerSelect = (choice) => {
    if (questions[currentQuestion]) {
      saveAnswer(questions[currentQuestion].id, choice);
      setShowError(false);
    }
  };

  if (!questions || questions.length === 0) {
    return <div>No questions available</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        {t('question')} {currentQuestion + 1} {t('of')} {questions.length}
      </div>

      {questions[currentQuestion] && (
        <Question
          question={questions[currentQuestion]}
          selectedAnswer={getCurrentAnswer()}
          onAnswerSelect={handleAnswerSelect}
        />
      )}

      <div className="quiz-navigation">
        <button
          className="back-btn"
          onClick={handleBack}
          disabled={currentQuestion === 0}
        >
          {t('back')}
        </button>

        {currentQuestion < questions.length - 1 ? (
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={getCurrentAnswer() === null}
          >
            {t('next')}
          </button>
        ) : (
          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            {t('submit')}
          </button>
        )}
      </div>

      {showError && (
        <div className="error-message">
          {t('answerAllQuestions')}
        </div>
      )}
    </div>
  );
};

export default Quiz;