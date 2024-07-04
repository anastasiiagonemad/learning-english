import React from 'react';
import { Link } from 'react-router-dom';
import './endmodal.css';

const EndModal = ({ show, handleClose, cardCount, handleRestart }) => {
  const showHideClassName = show
    ? 'endmodal display-block'
    : 'endmodal display-none';

  return (
    <div className={showHideClassName}>
      <section className="endmodal-main">
        <button className="endmodal-btn" onClick={handleClose}>
          ✕
        </button>
        <p className="endmodal-title">Congratulations! 🎉</p>
        <p className="endmodal-text">You know {cardCount} words.</p>
        <div className="restart-buttons">
          <Link to="/Categories" className="back-btn">
            Вернуться к категориям
          </Link>
          <button className="restart-btn" onClick={handleRestart}>
            Пройти еще раз
          </button>
        </div>
      </section>
    </div>
  );
};

export default EndModal;
