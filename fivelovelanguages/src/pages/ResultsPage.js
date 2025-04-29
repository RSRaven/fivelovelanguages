import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Menu from '../components/Menu';
import Results from '../components/Results';

const ResultsPage = () => {
  const { t } = useContext(LanguageContext);
  const { results, resetQuiz } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Check for results on mount
  useEffect(() => {
    console.log("ResultsPage mounted with results:", results);

    if (!results || results.length === 0) {
      console.log("No results found, redirecting to home");
      navigate('/', { replace: true });
    } else {
      setIsLoading(false);
    }
  }, [results, navigate]);

  const handleRetakeQuiz = () => {
    console.log("Retaking quiz");
    resetQuiz();
    navigate('/', { replace: true });
  };

  // Show loading while checking for results
  if (isLoading) {
    return (
      <div className="results-page">
        <Menu />
        <div className="results-container">
          <div>Loading results...</div>
        </div>
      </div>
    );
  }

  // If we get here, we should have results
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