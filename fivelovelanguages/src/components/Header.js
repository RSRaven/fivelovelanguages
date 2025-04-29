import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useContext(LanguageContext);

  return (
    <header className="app-header">
      <Link to="/" className="header-title">
        {t('appTitle')}
      </Link>
    </header>
  );
};

export default Header;