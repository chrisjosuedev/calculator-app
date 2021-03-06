import Logo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear'
import './App.css';
import { useState } from 'react'

/* Funciones Matematicas de node module mathjs */
import { evaluate } from 'mathjs'

function App() {

  // Logica Calculadora
  const [input, setInput] = useState('')

  const addInput = (value) => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      try {
        setInput(evaluate(input))
      } catch (e) {
        alert('Please, write a valid expression')
        setInput('')
      }  
    } else {
      alert('Please, write values to evaluate the operation')
    }
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img src={Logo} className='freecodecamp-logo' alt="freecodecamp-logo" />
      </div>
      <div className="calculator-container">

        <Screen input={input} />

        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}> - </Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}> = </Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear handleClear={() => setInput('')} >Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
