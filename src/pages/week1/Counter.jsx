import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log('Increase가 클릭됨', count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    console.log('Decrease가 클릭됨', count - 1);
  };


  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={increaseCount}>+1</button>
        <button onClick={decreaseCount}>-1</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
