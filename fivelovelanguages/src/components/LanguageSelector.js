import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, t } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">{t('selectLanguage')}: </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">{t('english')}</option>
        <option value="uk">{t('ukrainian')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;