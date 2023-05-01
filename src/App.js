import { useState } from 'react';
import './index.css';

function App() {

  const [colorValues, setColorValues] = useState([randomNumber(), randomNumber(), randomNumber()])

  function randomNumber(){
    return Math.floor(Math.random() * 255);
  }

  function changeColor(){
    setColorValues([randomNumber(), randomNumber(), randomNumber()]);
  }

  let styles = {
    backgroundColor: `rgb(${colorValues[0]} ${colorValues[1]} ${colorValues[2]})`
  }

  return (

    <div className="App" style={{backgroundColor: styles.backgroundColor}} onClick={changeColor}>
      
      </div>
  );
}

export default App;

