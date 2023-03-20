import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>To Do List</h1>
      <div className='input'>
        <List />
      </div>
    </div>
  );
}

export default App;
