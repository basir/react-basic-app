import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
export default Greeting;
