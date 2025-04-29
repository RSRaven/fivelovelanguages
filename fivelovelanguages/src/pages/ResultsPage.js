import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Menu from '../components/Menu';
import Results from '../components/Results';

const ResultsPage = () => {
  const { t } = useContext(LanguageContext);
  const { results, resetQuiz } = useContext(UserContext);
  const navigate = useNavigate();
  const redirectAttempted = useRef(false);

  // Redirect if no results available - using useRef to prevent multiple redirects
  useEffect(() => {
    if (!results && !redirectAttempted.current) {
      redirectAttempted.current = true;
      navigate('/quiz');
    }
  }, [results]); // Removed navigate from dependencies

  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="results-page">
      <Menu />

      <div className="results-container">
        <h1>{t('results')}</h1>

        <Results results={results} />

        <button
          className="retake-quiz-btn"
          onClick={handleRetakeQuiz}
        >
          {t('retakeQuiz')}
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;