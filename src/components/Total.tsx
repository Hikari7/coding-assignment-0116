type TotalProps = {
  price: number;
  count: number;
};

export const Total = ({ price, count }: TotalProps) => {
  return (
    <div className='total_container'>
      <h2>お会計</h2>
      <div className='total_inner'>
        <span className='total_text' id='count'>
          商品数: {count}個
        </span>
        <span className='total_text' id='price'>
          合計金額: {price}円
        </span>
      </div>
    </div>
  );
};
