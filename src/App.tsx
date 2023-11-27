import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  // const personName = {
  //   first: 'Amin',
  //   last: 'Mir',
  // };
  // const nameList = [
  //   {
  //     first: 'Hidi',
  //     last: 'Gh',
  //   },
  //   {
  //     first: 'Soli',
  //     last: 'Ma',
  //   },
  //   {
  //     first: 'Mosi',
  //     last: 'Go',
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Amin" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status='loading' />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to Dicaprio!</Heading>
      </Oscar>
      <Greet name='Amin' />
    </div>
  );
}

export default App;
