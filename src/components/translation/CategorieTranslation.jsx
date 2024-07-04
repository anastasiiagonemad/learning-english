import React, { useState, useEffect } from 'react';
import './modal.css';

const CategorieTranslation = ({ show, handleClose, animal }) => {
  const [loading, setLoading] = useState(true);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
        {loading ? (
          <p className="translation-loading">Загрузка...</p>
        ) : (
          <img className="translation-img" src={animal.img} alt={animal.name} />
        )}
      </section>
    </div>
  );
};

export default CategorieTranslation;
