import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { LanguageContext } from '../contexts/LanguageContext';

const Login = () => {
  const { login } = useContext(UserContext);
  const { t } = useContext(LanguageContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // In a real app, you would validate with a server
    // For this demo, we'll just simulate a successful login
    login({
      email,
      id: Date.now().toString() // simulate a user ID
    });

    // Reset form
    setEmail('');
    setPassword('');
    setShowForm(false);
    setError('');
  };

  if (!showForm) {
    return (
      <button
        className="login-btn"
        onClick={() => setShowForm(true)}
      >
        {t('login')}
      </button>
    );
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">{t('email')}</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">{t('password')}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-buttons">
          <button type="submit">{t('loginButton')}</button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>

        <div className="form-links">
          <button type="button" className="link-btn">
            {t('createAccount')}
          </button>
          <button type="button" className="link-btn">
            {t('forgotPassword')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;