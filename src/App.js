import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import ToggleButton from './ToggleButton';
import Welcome from './Welcome';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      <LoginControl hasNewMessage={true} credit={100} hasWarning={true} />
    </div>
  );
}

export default App;
