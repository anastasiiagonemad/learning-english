import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="auth">
      <div className="auth-title">
        <h2>Авторизация</h2>
      </div>
      <div className="auth-form">
        <form className="auth-form">
          <div className="auth-username">
            <label htmlFor="username">Имя</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="auth-password">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth-button">
            <button onClick={handleRegister} className="auth-btn">
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div className="auth-redirection">
          <p className="auth-redirection-text">Уже зарегистрированы?</p>
          <Link to="/Login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
