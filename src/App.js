import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br /><hr /><br />
      <Todo/>
    </div>
  );
}

export default App;
