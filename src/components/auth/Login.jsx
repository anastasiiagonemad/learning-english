import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const userArr = JSON.parse(localStorage.getItem(username));

    if (userArr && userArr.password === password) {
      setLoggedIn(true);
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return <Navigate to="/Account" />;
  }

  return (
    <div className="login">
      <div className="login-title">
        <h2>Войти в аккаунт</h2>
      </div>
      <form className="login-form">
        <div className="login-username">
          <label htmlFor="login-username">Имя</label>
          <input
            className="username"
            id="login-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-password">
          <label htmlFor="login-password">Пароль</label>
          <input
            className="password"
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-button">
          <button className="auth-btn" onClick={handleLogin}>
            Войти
          </button>
        </div>
      </form>
      <div className="auth-redirection">
        <p className="auth-redirection-text">Еще не зарегистрированы?</p>
        <Link to="/Registration">Регистрация</Link>
      </div>
    </div>
  );
};

export default Login;
