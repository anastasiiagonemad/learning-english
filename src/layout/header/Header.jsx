import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconAccount from '../../assets/images/account.png';
import lionLogo from '../../assets/images/draw_me_a_lion_cub_in_the_lion_king_style_with_the_le_3f0d95fa_6.png';
import './header.css';

function Header({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger">
      <div className="burger-logo">
        <Link to="/learning-english">
          <img src={lionLogo} alt="logo" />
        </Link>
      </div>
      <div className="burger-menu">
        <div className="burger-open" onClick={handleOpenMenu}>
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
        </div>
        {isOpen && (
          <div className="menu-modal">
            <nav className="menu">
              <ul>
                <li>
                  {loggedIn ? (
                    <Link onClick={handleLinkClick} to="/Account">
                      <img className="icon-account" src={iconAccount} alt="" />
                    </Link>
                  ) : (
                    <Link onClick={handleLinkClick} to="/Login">
                      <img className="icon-account" src={iconAccount} alt="" />
                    </Link>
                  )}
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="/learning-english">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="/categories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="StartLearning">
                    All words
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="Vocabulary">
                    Vocabulary
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="Quiz">
                    Quiz
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} to="Test">
                    Test
                  </Link>
                </li>
              </ul>
              <button onClick={handleCloseMenu} className="close-button">
                Close
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
