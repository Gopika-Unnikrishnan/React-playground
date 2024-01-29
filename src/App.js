
import './App.css';
import Button from './Components/Button/Button';
import AgeInput from './Components/AgeInput/AgeInput';

const App=()=> {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button label="ammu" color="red"/>
      <Button label="aju" color="yellow"/>
      <AgeInput/>
    </div> 
  );
}

export default App;
