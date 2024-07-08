import React, { useState } from 'react';
import './auth.css';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    if (username && password) {
      let userObject = JSON.parse(localStorage.getItem(username)) || {};
      userObject.password = password;
      userObject.username = username;
      localStorage.setItem(username, JSON.stringify(userObject));
      setUsername('');
      setPassword('');
      setRegister(true);
    } else {
      alert('Пожалуйста, заполните поля регистрации!');
    }
  };

  if (register) {
    return <Navigate to="/Account" />;
  }

  return (
    <div className="auth">
      <div className="auth-title">
        <h2>Регистрация</h2>
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
