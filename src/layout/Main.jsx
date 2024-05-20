import React from 'react';
import { Card } from '../components/Card';

function Main() {
  return (
    <div>
      <div>
        <Card />
      </div>
      <div className="card-buttons">
        <button className="no">Don't know</button>
        <button className="remaining">Remaining Cards</button>
        <button className="yes">Know</button>
      </div>
    </div>
  );
}

export { Main };
