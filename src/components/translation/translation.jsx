import React from 'react';
import words from '../words/words';
import '../../styles/modal.css';

const Translation = ({ show, handleClose, word }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-btn" onClick={handleClose}>
          ✕
        </button>
        <p>Congratulations! 🎉 You know it.</p>
        <p className="translation-words">
          {word.english} это {word.russian.toUpperCase()}
        </p>
      </section>
    </div>
  );
};

export default Translation;
