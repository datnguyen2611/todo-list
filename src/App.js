import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItems';

const data = [
  { title: 'hello', isComplete: true },
  { title: 'this is ', isComplete: true },
  { title: 'test' }
]
function onItemClick() {
  console.log('aa')
}
function App() {
  return (
    <div className="App">
      {data.length > 0 && data.map((item) => <TodoItem item={item} onClick={onItemClick} />)}
      {data.length === 0 && 'nothing here'}
    </div>
  );
}

export default App;
