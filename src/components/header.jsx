import Image from '../../public/investment-calculator-logo.png'


export default function header (){
    return(
 <div id="header">
    <img src={Image} alt="" />
    <h1>Investment Calculator</h1>
  </div>
    )
}