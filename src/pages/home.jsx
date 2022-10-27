import React, { useEffect, useMemo, useRef, useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const inputRef = useRef(null);
  const now = new Date();
  const nowMemo = useMemo(() => new Date(), []);

  useEffect(() => {
    setIsValid(input?.length > 2);
  }, [input]);

  return (
    <div className="box m2">
      <h1>Home</h1>

      <h3 className="m2">useState</h3>

      <div className="flex m2">
        <button onClick={() => setIsClicked(true)}>Click me</button>

        <span>{`Is clicked: ${isClicked}`}</span>
      </div>

      <div className="flex m2">
        <button onClick={() => setCounter((value) => ++value)}>+</button>
        <button onClick={() => setCounter((value) => --value)}>-</button>

        <span>{`Counter: ${counter}`}</span>
      </div>

      <div className="flex m2">
        <button onClick={() => setCounter(0)}>Reset counter</button>
      </div>

      <hr />

      <h3 className="m2">useMemo</h3>

      <div className="flex m1">
        <p>Current date</p>

        <span>{now.toISOString()}</span>
      </div>

      <div className="flex m1">
        <p>Saved (memo) date</p>

        <span>{nowMemo.toISOString()}</span>
      </div>

      <hr />

      <h3 className="m2">useEffect</h3>

      <div className="flex m2">
        <input
          onChange={({ target }) => setInput(target?.value)}
          value={input}
          ref={inputRef}
        />

        <span>{isValid ? '✅' : '❌'}</span>
      </div>

      <hr />

      <h3 className="m2">useRef</h3>

      <div className="flex m2">
        <button onClick={() => inputRef.current.focus()}>Focus input</button>
      </div>
    </div>
  );
};

export default Home;
