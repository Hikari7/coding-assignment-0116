import './styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <div className='title_container'>
        <h1>track-cafe</h1>
        <p>お好きなメニューを選択してください</p>
      </div>
      <div className='contents'>
        <div className='menu_container'>
          <div>
            <button>coffee</button>
            <button>coffee</button>
            <button>coffee</button>
            <button>coffee</button>
            <button>coffee</button>
          </div>
        </div>
        <div>Display Total component</div>
      </div>
    </div>
  );
}

export default App;
