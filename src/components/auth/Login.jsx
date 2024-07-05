import React, { useState } from 'react';
import './auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
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
    return (
      <div className="loggedIn">
        <p className="loggedIn-title">
          Добро пожаловать, {localStorage.getItem('username').toUpperCase()}
        </p>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login-title">
        <h2>Войти в акканут</h2>
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
    </div>
  );
};

export default Login;
