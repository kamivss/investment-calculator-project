import { useState } from 'react';

export default function userInput(){
const [userInput, setUserInput] = useState({

    investimentoInicial:1000,
    invertimentoAnual:900,
    expectativaRetorno:6,
    duracao:10
})


function handleChange(inputIndentifier, newValue){
    setUserInput(prevUserInput =>{
        return{
            ...prevUserInput,
            [inputIndentifier]:newValue
        }
    })
}
    return(
   <section id="user-input">
        <div className="input-group">
            <p>
                <label>Investimento Inicial</label>
                <input 
                type="number" required
                value={userInput.investimentoInicial}
                onChange={(event) => handleChange('investimentoInicial', event.target.value)}/>
            </p>
            <p>
                <label>Investimento anual</label>
                <input 
                type="number" required
                value={userInput.invertimentoAnual}
                onChange={(event) => handleChange('invertimentoAnual', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expectativa de retorno(%)</label>
                <input 
                type="number" required
                value={userInput.expectativaRetorno}
                onChange={(event) => handleChange('expectativaRetorno', event.target.value)}/>
            </p>
            <p>
                <label>Duração(anual)</label>
                <input 
                type="number" required
                value={userInput.duracao}
                onChange={(event) => handleChange('duracao', event.target.value)}/>
            </p>
        </div>
    </section>
    )
}
