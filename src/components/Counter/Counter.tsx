"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={increment} data-testid="increment-button">
        Increment
      </button>
    </div>
  );
};
