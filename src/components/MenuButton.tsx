import React from 'react';
import { MenuButtonType } from '../const/menuData';

const MenuButton = ({ menu, itemPrice, id }: MenuButtonType) => {
  const handleAddOrder = () => {
    console.log('clicked');
  };

  return (
    <button type='button' id={id} className='button' onClick={handleAddOrder}>
      <h3>{menu}</h3>
      <p>{itemPrice}円</p>
    </button>
  );
};

export default MenuButton;
