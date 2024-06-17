import { useState } from "react";
import Input from "./Input.jsx";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('pkr');
  const fromCountryData = useCurrencyInfo(fromCurrency);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0); 
  return (
    <div
      className="mx-5 rounded-lg  mb-8 bg-gray-800 pb-3"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <h1 className="text-center text-3xl font-serif">
        Currency Converter
      </h1>
      <h1 className="text-center my-3 text-2xl font-serif">Using</h1>
      <h1 className="text-center my-3 text-2xl font-serif">Custom Hooks</h1>
      <div className="rounded p-5 mx-auto">
        <Input 
          from={'From'} 
          amount={fromAmount} 
          setAmount={setFromAmount}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          disabledInput={false}
          disabledSelect={false}
        />
        <div className="w-full text-center">
          <button 
            onClick={() => {
              setFromAmount(toAmount);
              setToAmount(fromAmount);
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }} 
            className="btn btn-primary">Swap</button>
        </div>
        <Input 
          to={'To'} 
          amount={toAmount} 
          setAmount={setToAmount}
          currency={toCurrency}
          setCurrency={setToCurrency}
          disabledInput={true}
          disabledSelect={false}
        />
      </div>
      <div className="w-full text-center">
        <button 
          className="btn btn-primary"
          onClick={()=>{
            setToAmount(fromAmount*fromCountryData[toCurrency]);
          }}
        >Convert {fromCurrency.toLocaleUpperCase()} to {toCurrency.toUpperCase()}</button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
