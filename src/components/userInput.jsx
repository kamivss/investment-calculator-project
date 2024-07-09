
export default function userInput({onChange , userInput}){
    return(
   <section id="user-input">
        <div className="input-group">
            <p>
                <label>Investimento Inicial</label>
                <input 
                type="number" required
                value={userInput.initialInvestment}
                onChange={(event) => onChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Investimento anual</label>
                <input 
                type="number" required
                value={userInput.annualInvestment}
                onChange={(event) => onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expectativa de retorno(%)</label>
                <input 
                type="number" required
                value={userInput.expectedReturn}
                onChange={(event) => onChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duração(anual)</label>
                <input 
                type="number" required
                value={userInput.duration}
                onChange={(event) => onChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
    )
}
