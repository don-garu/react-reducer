import React, { useState, useReducer } from 'react';
import './style.css';

export default function App() {
  function countReducer(oldCount, action) {
    if (action === 'UP') {
      return oldCount + 1;
    } else if (action === 'DOWN') {
      return oldCount - 1;
    } else if (action === 'RESET') {
      return 0;
    }
  }

  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch('DOWN');
  }
  function reset() {
    countDispatch('RESET');
  }
  function up() {
    countDispatch('UP');
  }
  return (
    <div>
      <input type="button" value="-" onclick={down} />
      <input type="button" value="0" onclick={reset} />
      <input type="button" value="+" onclick={up} />
      <span>{count}</span>
    </div>
  );
}
