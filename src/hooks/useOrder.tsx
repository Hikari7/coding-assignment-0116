import { useState } from 'react';

type CountState = { [key: string]: number };

export const useOrder = () => {
  const [count, setCount] = useState<CountState>({});

  const handleAddOrder = (id: string) => {
    setCount((prevCount) => {
      const newCount = (prevCount[id] || 0) + 1;
      return { ...prevCount, [id]: newCount };
    });
  };

  return { count, handleAddOrder };
};
