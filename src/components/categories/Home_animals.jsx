import React, { useState } from 'react';
import CardHomeAnimals from '../cards/CardHomeAnimals';
import CategorieTranslation from '../translation/CategorieTranslation';
import '../cards/card.css';
import '../cards/buttons.css';
import homeAnimals from '../words/home_animals';
import EndModal from '../endModal/EndModal';

function HomeAnimals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countCards, setCountCards] = useState(0);
  const [endModal, setEndModal] = useState(false);

  const handleNoButtonClick = () => {
    if (currentIndex < homeAnimals.length) {
      setShowTranslation(true);
      setShowModal(true);
      setEndModal(false);
    }
  };

  const handleYesButtonClick = () => {
    if (currentIndex < homeAnimals.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowTranslation(false);
      setCountCards(countCards + 1);
      setEndModal(false);
    } else {
      setEndModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleEndModal = () => {
    setEndModal(false);
  };

  const handleRestartGame = () => {
    setCurrentIndex(0);
    setCountCards(0);
    setEndModal(false);
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
          <CardHomeAnimals {...homeAnimals[currentIndex]} />
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
        animal={homeAnimals[currentIndex]}
      />

      <EndModal
        show={endModal}
        handleClose={handleEndModal}
        cardCount={countCards}
        handleRestart={handleRestartGame}
      />
    </div>
  );
}

export default HomeAnimals;
