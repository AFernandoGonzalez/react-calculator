import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {

  const [input, setInput] = useState('')

  const addVal = (val) => {
    setInput(input + val );
    // console.log(input, val);
  }

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input))
    }else {
      alert('Please enter a value greater than 0 first!')
    }
  }

  return (
    <div className="App">
      <div className='calculatorContainer'>
        <Screen input={input} />
        <div className='row'>
          <Button manageInput={addVal}>1</Button>
          <Button manageInput={addVal}>2</Button>
          <Button manageInput={addVal}>3</Button>
          <Button manageInput={addVal}>+</Button>
        </div>
        <div className='row'>
          <Button manageInput={addVal}>4</Button>
          <Button manageInput={addVal}>5</Button>
          <Button manageInput={addVal}>6</Button>
          <Button manageInput={addVal}>-</Button>
        </div>
        <div className='row'>
          <Button manageInput={addVal}>7</Button>
          <Button manageInput={addVal}>8</Button>
          <Button manageInput={addVal}>9</Button>
          <Button manageInput={addVal}>*</Button>
        </div>
        <div className='row'>
          <Button manageInput={calculateResult}>=</Button>
          <Button manageInput={addVal}>0</Button>
          <Button manageInput={addVal}>.</Button>
          <Button manageInput={addVal}>/</Button>
        </div>
        <div className='row btnClear'>
          <ClearButton manageClear={()=> setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
