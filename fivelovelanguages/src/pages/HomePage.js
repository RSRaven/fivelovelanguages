import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Menu from '../components/Menu';

const HomePage = () => {
  const { t } = useContext(LanguageContext);
  const { user, gender, results } = useContext(UserContext);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleViewResults = () => {
    if (results) {
      navigate('/results');
    }
  };

  return (
    <div className="home-page">
      <Menu />

      <div className="home-content">
        <h1>{t('welcome')}</h1>
        <p className="introduction">{t('introduction')}</p>

        {user && results && (
          <button
            className="view-results-btn"
            onClick={handleViewResults}
          >
            {t('viewResults')}
          </button>
        )}

        <button
          className="start-quiz-btn"
          onClick={handleStartQuiz}
        >
          {t('startQuiz')}
        </button>
      </div>
    </div>
  );
};

export default HomePage;