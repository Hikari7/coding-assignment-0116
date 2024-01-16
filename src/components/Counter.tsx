export type counterType = {
  id: string;
  count: number;
};

const Counter = ({ count, id }: counterType) => {
  return (
    /**FIXME: changed ID to *-count */
    <div id={`count-${id}`} className='counter'>
      {count}
    </div>
  );
};

export default Counter;
