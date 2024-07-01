import React, { useState, useRef, useLayoutEffect } from 'react';
import Card from './Card';
import Translation from './translation/translation';
import '../styles/card.css';
import '../styles/buttons.css';
import words from './words/words';

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countCards, setCountCards] = useState(0);

  const noButtonRef = useRef(null);

  useLayoutEffect(() => {
    if (noButtonRef.current && document.querySelector('.cards-items')) {
      noButtonRef.current.focus();
      noButtonRef.current.classList.add('focused');
      setTimeout(() => {
        noButtonRef.current.classList.remove('focused');
      }, 3000);
    }
  }, [currentIndex]);

  const handleNoButtonClick = () => {
    if (currentIndex < words.length - 1) {
      setShowTranslation(true);
      setShowModal(true);
    } else {
      alert('Testing is over! Click to start again');
      setCurrentIndex(0);
    }
  };

  const handleYesButtonClick = () => {
    if (currentIndex < words.length - 1) {
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
          <Card {...words[currentIndex]} />
        </div>
      </div>

      <div className="card-buttons">
        <button ref={noButtonRef} className="no" onClick={handleNoButtonClick}>
          Don't know
        </button>

        <button className="yes" onClick={handleYesButtonClick}>
          Know
        </button>
      </div>

      <Translation
        show={showModal}
        handleClose={handleModalClose}
        word={words[currentIndex]}
      />
    </div>
  );
}

export default Cards;
