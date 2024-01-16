import React from 'react';
import { MenuButtonType } from '../const/menuData';

const MenuButton = ({ menu, itemPrice, id }: MenuButtonType) => {
  const handleAddOrder = () => {
    console.log('clicked');
  };

  return (
    <div className='button_container'>
      <div id={`count-${id}`} className='counter'>
        0
      </div>
      <button type='button' id={id} className='button' onClick={handleAddOrder}>
        <h3>{menu}</h3>
        <p>{itemPrice}円</p>
      </button>
    </div>
  );
};

export default MenuButton;
