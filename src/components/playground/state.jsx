import { useState } from "react";

const StatePlayground = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const addOne = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const subtOne = () => {
    setCount((prevCount) => {
      /// large calculation
      return prevCount - 1;
    });
  };

  const resetCount = () => {
    setCount(initialCount);
  };

  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>Add one +1</button>
      <button onClick={subtOne}>Subt one -1</button>
      <button onClick={resetCount}>RESET</button>
    </>
  );
};

export default StatePlayground;
