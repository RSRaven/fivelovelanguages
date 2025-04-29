import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Question from '../components/Question';
import Menu from '../components/Menu';

const QuizPage = () => {
  const { t } = useContext(LanguageContext);
  const { gender, answers, saveAnswer, calculateResults, quizInProgress, setQuizInProgress } = useContext(UserContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Redirect to home if not in quiz mode
  useEffect(() => {
    if (!quizInProgress) {
      navigate('/');
    }
  }, [quizInProgress, navigate]);

  // Load questions based on gender
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        // In a real implementation, you might fetch from an API
        // For now, we'll import directly
        const questionsModule = await import('../data/questions');
        console.log("Loaded questions module:", questionsModule);

        // Filter questions by gender
        const genderQuestions = questionsModule.default.filter(
          q => q.gender === gender || q.gender === 'both'
        );
        console.log("Filtered questions for gender:", gender, genderQuestions);

        // Limit to 30 questions if there are more
        const selectedQuestions = genderQuestions.slice(0, 30);
        console.log("Selected questions:", selectedQuestions);

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

  const handleSubmit = async () => {
    // Check if all questions are answered
    const unansweredCount = questions.length - answers.length;
    console.log(`Unanswered questions: ${unansweredCount}`);

    if (unansweredCount > 0) {
      setShowError(true);
      return;
    }

    try {
      // Calculate and save results
      console.log("Submitting quiz and calculating results");
      const results = calculateResults(questions);
      console.log("Calculation completed, results:", results);

      // Ensure the results are saved before navigating
      await new Promise(resolve => setTimeout(resolve, 100));

      // Make sure quiz in progress is properly set to false
      setQuizInProgress(false);

      // Use explicit path with replace to avoid redirect issues
      navigate('/results', { replace: true });

      console.log("Navigation to results completed");
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const getCurrentAnswer = () => {
    if (!questions[currentQuestion]) return null;

    const found = answers.find(a => a.questionId === questions[currentQuestion].id);
    return found ? found.choice : null;
  };

  const handleAnswerSelect = (choice) => {
    if (questions[currentQuestion]) {
      console.log(`Saving answer for question ${questions[currentQuestion].id}: option ${choice}`);
      saveAnswer(questions[currentQuestion].id, choice);
      setShowError(false);
    }
  };

  if (loading) {
    return (
      <div className="quiz-page">
        <Menu />
        <div className="quiz-container">
          <div>Loading questions...</div>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="quiz-page">
        <Menu />
        <div className="quiz-container">
          <div>No questions available for this gender.</div>
        </div>
      </div>
    );
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