import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Question from '../components/Question';
import Menu from '../components/Menu';

const QuizPage = () => {
  const { t } = useContext(LanguageContext);
  const { gender, answers, saveAnswer, calculateResults } = useContext(UserContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load questions based on gender
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        // In a real implementation, you might fetch from an API
        // For now, we'll import directly
        const questionsModule = await import('../data/questions');

        // Filter questions by gender
        const genderQuestions = questionsModule.default.filter(
          q => q.gender === gender || q.gender === 'both'
        );

        // Limit to 30 questions if there are more
        const selectedQuestions = genderQuestions.slice(0, 30);

        setQuestions(selectedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load questions:', error);
        setLoading(false);
      }
    };

    loadQuestions();
  }, [gender]); // Only re-run if gender changes

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
    if (answers.length < questions.length) {
      setShowError(true);
      return;
    }

    // Calculate and save results
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

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (!questions.length) {
    return <div>No questions available for this gender.</div>;
  }

  return (
    <div className="quiz-page">
      <Menu />

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
    </div>
  );
};

export default QuizPage;