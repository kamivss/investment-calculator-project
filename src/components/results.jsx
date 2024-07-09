import { calculateInvestmentResults , formatter} from '../util/investment.js'

export default function Results({ input }){
   const resultsData = calculateInvestmentResults(input);
   const initiailInvestment = resultsData[0].valueEndOfYear -
    resultsData[0].interest - 
    resultsData[0].annualInvestment;

 return <table id='result'>
    <thead>
        <th>Ano</th>
        <th>Valor investimento</th>
        <th> juros (Ano)</th>
        <th>Juros totais</th>
        <th>Capital investido</th>
    </thead>
    <tbody>
     {resultsData.map(yearData => {
        const totalInterest =
        yearData.valueEndOfYear - 
        yearData.annualInvestment * yearData.year - 
        initiailInvestment;

        const totalAmountInvested =
        yearData.valueEndOfYear - totalInterest

        return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
     })}
    </tbody>
 </table>
}
