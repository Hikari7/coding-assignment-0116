import React from 'react';
import { MenuButtonType } from '../const/menuData';
import Counter from './Counter';

type MenuButtonProps = MenuButtonType & {
  handleAddOrder: (id: string) => void;
  itemCount: number;
};

const MenuButton = ({
  menu,
  itemPrice,
  id,
  itemCount,
  handleAddOrder,
}: MenuButtonProps) => {
  return (
    <div className='button_container'>
      <Counter id={id} count={itemCount} />
      <button
        type='button'
        id={id}
        className='button'
        onClick={() => handleAddOrder(id)}
      >
        <h3>{menu}</h3>
        <p>{itemPrice}円</p>
      </button>
    </div>
  );
};

export default MenuButton;
