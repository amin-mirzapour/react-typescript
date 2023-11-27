import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Amin',
    last: 'Mir',
  };
  const nameList = [
    {
      first: 'Hidi',
      last: 'Gh',
    },
    {
      first: 'Soli',
      last: 'Ma',
    },
    {
      first: 'Mosi',
      last: 'Go',
    },
  ];

  return (
    <div className="App">
      <Greet name="Amin" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
