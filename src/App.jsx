import { useState } from 'react'
import Input from './components/userInput.jsx'
import Header from './components/header.jsx'
import Results from './components/results.jsx'

function App() {
  const [userInput, setUserInput] = useState({

    initialInvestment:1000,
    annualInvestment:900,
    expectedReturn:6,
    duration:10
})


const inputIsvalid = userInput.duration >= 1;

function handleChange(inputIndentifier, newValue){
  setUserInput(prevUserInput =>{
      return{
          ...prevUserInput,
          [inputIndentifier]: +newValue
      }
  })
}



  return (
    <>
      <Header />
      <Input onChange={handleChange} userInput={userInput}/>
      {!inputIsvalid && <p className='center'>Coloque uma duração maior que 0.</p>}
      {inputIsvalid && <Results input={userInput} />}

    </>
  ) 
}

export default App
