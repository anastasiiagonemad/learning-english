import React from 'react';
import '../../styles/modal.css';

const CategorieTranslation = ({ show, handleClose, animal }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-btn" onClick={handleClose}>
          ✕
        </button>
        <p className="translation-animals">{animal.name}</p>
        <p className="translation-animals-rus">
          {animal.translate.toUpperCase()}
        </p>
        <img className="translation-img" src={animal.img} alt="animal" />
      </section>
    </div>
  );
};

export default CategorieTranslation;
