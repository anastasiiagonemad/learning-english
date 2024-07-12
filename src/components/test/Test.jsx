import React from 'react';
import { observer } from 'mobx-react-lite';
import counterStore from '../store/store';

const Test = observer(() => {
  const handleIncrement = () => {
    counterStore.increment();
  };
  const handleDecrement = () => {
    counterStore.decrement();
  };

  return (
    <div>
      <h2>Count: {counterStore.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
});

export default Test;
