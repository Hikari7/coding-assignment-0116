import { useState } from 'react';

type CountState = { [key: string]: number };

export const useOrder = () => {
  const [count, setCount] = useState<CountState>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddOrder = (id: string, itemPrice: number) => {
    setCount((prevCount) => {
      const newCount = (prevCount[id] || 0) + 1;
      return { ...prevCount, [id]: newCount };
    });
    setTotalPrice((prevPrice) => prevPrice + itemPrice);
  };

  let totalCount = 0;
  for (const id in count) {
    totalCount += count[id];
  }

  return { count, handleAddOrder, totalPrice, totalCount };
};
