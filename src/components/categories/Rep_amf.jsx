import React, { useState } from 'react';
import CardRepAmph from './CardRepAmph';
import CategorieTranslation from '../translation/CategorieTranslation';
import '../../styles/card.css';
import '../../styles/buttons.css';
import repAmph from '../words/rep_amph';

function RepAmph() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countCards, setCountCards] = useState(0);

  const handleNoButtonClick = () => {
    if (currentIndex < repAmph.length - 1) {
      setShowTranslation(true);
      setShowModal(true);
    } else {
      alert('Testing is over! Click to start again');
      setCurrentIndex(0);
    }
  };

  const handleYesButtonClick = () => {
    if (currentIndex < repAmph.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowTranslation(false);
      setCountCards(countCards + 1);
    } else {
      alert('Testing is over! Click to start again');
      setCurrentIndex(0);
      setCountCards(0);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="cards-items">
      <div className="card-known">
        <p className="card-count-name">
          You know <span>{countCards}</span> words.
        </p>
      </div>
      <div className="card-translater">
        <div>
          <CardRepAmph {...repAmph[currentIndex]} />
        </div>
      </div>

      <div className="card-buttons">
        <button className="no" onClick={handleNoButtonClick}>
          Don't know
        </button>

        <button className="yes" onClick={handleYesButtonClick}>
          Know
        </button>
      </div>

      <CategorieTranslation
        show={showModal}
        handleClose={handleModalClose}
        animal={repAmph[currentIndex]}
      />
    </div>
  );
}

export default RepAmph;
