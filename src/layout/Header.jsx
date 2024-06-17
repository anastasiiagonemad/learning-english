import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to="/learning-english">
          L.E.E.
        </Link>
        <p>Learn English Easily</p>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <Link className="header__nav-link" to="/learning-english">
                Home
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/StartLearning">
                Start Learning
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export { Header };
