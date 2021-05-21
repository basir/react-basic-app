import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import ToggleButton from './ToggleButton';
import Welcome from './Welcome';
import LoginControl from './LoginControl';
import NumberList from './NumberList';

function App() {
  const numbers = [23, 56, 78, 90, 'Test'];
  const numbers2 = [21, 56, 78, 91, 'Test'];
  const todos = [
    { id: '1', name: 'Coding', isDone: false },
    { id: '2', name: 'Walking', isDone: true },
  ];
  return (
    <div>
      <NumberList numbers={numbers} />
      <NumberList numbers={numbers2} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.isDone ? 'Done' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
