import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Results = ({ results }) => {
  const { t } = useContext(LanguageContext);

  // Ensure results exist
  if (!results || results.length === 0) {
    return <div>No results available</div>;
  }

  // The primary love language is the one with the highest score
  const primaryLanguage = results[0];
  const secondaryLanguage = results[1];

  // Check if there's a tie for first place
  const hasTie = secondaryLanguage && primaryLanguage.score === secondaryLanguage.score;

  // Check if secondary is close to primary (e.g., within 2 points)
  const isSecondaryClose = secondaryLanguage &&
    (primaryLanguage.score - secondaryLanguage.score <= 2) &&
    !hasTie;

  // Calculate the total points to get percentages
  const totalPoints = results.reduce((sum, item) => sum + item.score, 0);

  return (
    <div className="results-container">
      <div className="primary-language">
        <h2>{t('primaryLanguage')}</h2>

        {hasTie ? (
          <div className="tied-languages">
            <div className="primary-language-name">
              {t(primaryLanguage.category)} & {t(secondaryLanguage.category)}
            </div>
            <p className="result-explanation">
              {t('tiedLanguagesExplanation')}
            </p>
          </div>
        ) : (
          <div className="primary-language-name">
            {t(primaryLanguage.category)}
          </div>
        )}

        {isSecondaryClose && (
          <p className="secondary-language-note">
            {t('secondaryLanguageNote')}
          </p>
        )}

        <div className="primary-language-description">
          <h3>{t('explanation')}</h3>
          <p>{t(`${primaryLanguage.category}Desc`)}</p>

          {hasTie && (
            <p className="mt-4">{t(`${secondaryLanguage.category}Desc`)}</p>
          )}
        </div>

        <p className="score-maximum-note">
          {t('scoreMaximumNote')}
        </p>
      </div>

      <div className="score-breakdown">
        <h3>{t('scoreBreakdown')}</h3>

        <div className="score-chart">
          {results.map((result, index) => {
            const percentage = Math.round((result.score / totalPoints) * 100);

            return (
              <div className="score-item" key={index}>
                <div className="language-name">
                  {t(result.category)}
                </div>
                <div className="score-bar-container">
                  <div
                    className="score-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                  <span className="score-value">
                    {result.score} ({percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;