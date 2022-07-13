import './App.css';
import ErrorBoundary from './ErrorBoundary';
import UserProfile from './UserProfile';

const userData = {
  username: 'max',
  name: 'Max',
  age: 22,
  city: 'London'
};

const {username, name, age, city} = userData;

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <UserProfile
        username={username}
        name={name}
        age={age}
        city={city}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
