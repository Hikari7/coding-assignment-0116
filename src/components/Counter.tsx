export type counterType = {
  id: string;
  count: number;
};

const Counter = ({ count, id }: counterType) => {
  return (
    <div id={`count-${id}`} className='counter'>
      {count}
    </div>
  );
};

export default Counter;
