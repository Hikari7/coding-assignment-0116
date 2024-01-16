import './styles/global.scss';
import './App.scss';
import MenuButton from './components/MenuButton';
import { menuData } from './const/menuData';
import { useOrder } from './hooks/useOrder';

function App() {
  const { count, handleAddOrder } = useOrder();

  return (
    <div className='container'>
      <div className='title_container'>
        <h1>track-cafe</h1>
        <p>お好きなメニューを選択してください</p>
      </div>
      <div className='contents'>
        <div className='menu_container'>
          {menuData.map((menuItem) => {
            return (
              <MenuButton
                key={menuItem.id}
                id={menuItem.id}
                menu={menuItem.menu}
                itemPrice={menuItem.itemPrice}
                handleAddOrder={handleAddOrder}
                itemCount={count[menuItem.id] || 0}
              />
            );
          })}
        </div>
        <div>Display Total component</div>
      </div>
    </div>
  );
}

export default App;
