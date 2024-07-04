import React from 'react';

const CardRepAmph = (props) => {
  const { name, transcript } = props;
  return (
    <div>
      <div className="card-content">
        <div className="card">
          <p>{name}</p>
          <p>{transcript}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRepAmph;
