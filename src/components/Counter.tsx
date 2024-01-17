export type counterType = {
  id: string;
  itemCount: number;
};

const Counter = ({ itemCount, id }: counterType) => {
  return (
    <div id={`${id}-count`} className='counter'>
      {itemCount}
    </div>
  );
};

export default Counter;
