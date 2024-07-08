import React from 'react';
import './auth.css';

import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="account">
      <div>
        <h2>Hello 🤩</h2>
      </div>
      <div className="account-links">
        <Link to="/Vocabulary" className="account-links-btn">
          Vocabulary(словарик)
        </Link>
        <Link to="/Progress" className="account-links-btn">
          Your progress(твой прогресс)
        </Link>
      </div>
    </div>
  );
};

export default Account;
