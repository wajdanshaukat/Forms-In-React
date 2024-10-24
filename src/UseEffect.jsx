import { useState, useEffect } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const incCount = () => {
    setCount((currCount) => currCount + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incCount}>+1</button> &nbsp;&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
