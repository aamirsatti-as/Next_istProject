import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
  <>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
    <style jsx>{`
        .counter {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        button {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          border-radius: 0.25rem;
          border: none;
          background-color: #333;
          color: #fff;
          cursor: pointer;
        }

        button:hover {
          background-color: #444;
        }
      `}</style>
      </>
  );
};

export default Counter;
