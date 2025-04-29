import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserContext } from '../contexts/UserContext';
import Menu from '../components/Menu';

const HomePage = () => {
  const { t } = useContext(LanguageContext);
  const { results, startQuiz, setGender, gender } = useContext(UserContext);
  const [showGenderSelector, setShowGenderSelector] = useState(false);
  const navigate = useNavigate();

  const handleStartQuizClick = () => {
    setShowGenderSelector(true);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleStartQuiz = () => {
    startQuiz(); // This will set quizInProgress to true
    navigate('/quiz'); // Navigate directly to quiz page
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

        {results && (
          <button
            className="view-results-btn"
            onClick={handleViewResults}
          >
            {t('viewResults')}
          </button>
        )}

        {!showGenderSelector ? (
          <button
            className="start-quiz-btn"
            onClick={handleStartQuizClick}
          >
            {t('startQuiz')}
          </button>
        ) : (
          <div className="gender-selection-container">
            <h3>{t('selectGender')}</h3>
            <div className="gender-options">
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="men"
                  checked={gender === 'men'}
                  onChange={handleGenderChange}
                />
                <span>{t('men')}</span>
              </label>
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="women"
                  checked={gender === 'women'}
                  onChange={handleGenderChange}
                />
                <span>{t('women')}</span>
              </label>
            </div>
            <button
              className="confirm-gender-btn"
              onClick={handleStartQuiz}
            >
              {t('confirmAndStart')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;