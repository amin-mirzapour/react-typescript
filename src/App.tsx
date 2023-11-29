import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import MyParentComponent from './components/InputTest';
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
      {/* <Status status='loading' />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to Dicaprio!</Heading>
      </Oscar>
      <Greet name='Amin' /> */}

      {/* <Button
        handlClick={(event, id) => console.log('button clicked', event, id)}
      />
      <Input value='' handleChange={(event)=> console.log(event)} /> */}

      {/* <Container styles={{border: '1px solid black', padding:'1rem'}} /> */}

      {/* <MyParentComponent/> */}
    </div>
  );
}

export default App;
