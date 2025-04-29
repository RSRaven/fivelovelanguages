import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import Login from './Login';

const Menu = () => {
  const { user, gender, setGender, logout } = useContext(UserContext);
  const { t } = useContext(LanguageContext);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/" className="home-link">
          {t('appTitle')}
        </Link>
      </div>

      <div className="menu-item gender-selector">
        <label htmlFor="gender-select">{t('selectGender')}: </label>
        <select
          id="gender-select"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="men">{t('men')}</option>
          <option value="women">{t('women')}</option>
        </select>
      </div>

      <div className="menu-item">
        <LanguageSelector />
      </div>

      <div className="menu-item">
        {user ? (
          <div className="user-menu">
            <span className="user-email">{user.email}</span>
            {user.results && (
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
          <Login />
        )}
      </div>
    </div>
  );
};

export default Menu;