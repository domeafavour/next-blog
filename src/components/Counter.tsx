import React, { useState } from 'react';

interface Props {}

export type { Props as CounterProps };

export const Counter: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      {count}
    </button>
  );
};
