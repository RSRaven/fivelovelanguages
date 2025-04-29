import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import Login from './Login';

const Menu = () => {
  const { user, logout, results } = useContext(UserContext);
  const { t } = useContext(LanguageContext);

  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/" className="home-link">
          {t('appTitle')}
        </Link>
      </div>

      <div className="menu-item">
        <LanguageSelector />
      </div>

      <div className="menu-item">
        {user ? (
          <div className="user-menu">
            <span className="user-email">{user.email}</span>
            {results && (
              <Link to="/results" className="results-link">
                {t('viewResults')}
              </Link>
            )}
            <button
              className="logout-btn"
              onClick={logout}
            >
              {t('logout')}
            </button>
          </div>
        ) : (
          <div className="guest-menu">
            {results && (
              <Link to="/results" className="results-link menu-results-link">
                {t('viewResults')}
              </Link>
            )}
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;