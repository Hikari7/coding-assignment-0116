import { MenuButtonType } from '../const/menuData';
import Counter from './Counter';

type MenuButtonProps = MenuButtonType & {
  handleAddOrder: (id: string, itemPrice: number) => void;
  itemCount: number;
};

const MenuButton = ({
  id,
  menu,
  itemPrice,
  itemCount,
  handleAddOrder,
}: MenuButtonProps) => {
  return (
    <div className='button_container'>
      <Counter id={id} itemCount={itemCount} />
      <button
        type='button'
        id={id}
        className='button'
        onClick={() => handleAddOrder(id, itemPrice)}
      >
        <h3>{menu}</h3>
        <p>{itemPrice}円</p>
      </button>
    </div>
  );
};

export default MenuButton;
