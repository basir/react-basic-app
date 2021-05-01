import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(userName) {
    return userName.toUpperCase();
  }
  function getGreeting(username) {
    if (username) {
      return <h1>Hello {formatName(username)}</h1>;
    } else {
      return <h1>Hello Stranger</h1>;
    }
  }
  const name = 'John Smith';
  const userImage = '/logo192.png';
  const image = <img className="sample-class" src={userImage} alt="logo" />;
  const element = (
    <div>
      <h1>Hello {name}</h1>
      <p>Good to see you</p>
      {image}
    </div>
  );

  return element;
}

export default App;
