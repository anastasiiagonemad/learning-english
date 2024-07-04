import React from 'react';

function Card(props) {
  const { english, transcription } = props;
  return (
    <React.Fragment>
      <div className="card-content">
        <div className="card">
          <p>{english}</p>
          <p>{transcription}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
