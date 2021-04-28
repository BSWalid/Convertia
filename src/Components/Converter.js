import React from "react";
import { useState, useEffect } from "react";
import "./Converter.css";
import CurrencyFlag from "react-currency-flags";

import "currency-flags/dist/currency-flags.min.css";

const Converter = () => {
  const URL =
    "https://v6.exchangerate-api.com/v6/8552872dbbe44d63b0c00a36/latest/USD";
   const Base_URL = "https://v6.exchangerate-api.com/v6/8552872dbbe44d63b0c00a36/latest";



  const [currencyList, setcurrencyList] = useState([]);
  const [rateList, setRateList] = useState([])  
  const [fromCurrency, setfromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  

  
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  const [rate, setRate] = useState();

  
  
  useEffect(() => {
      setRate(rateList[toCurrency])
      
  }, [toCurrency]);

  useEffect(() => {
    
    
    fetch(`${Base_URL}/${fromCurrency}`)
    .then(res => res.json())
    .then(data => {
        
      
      
      if(toCurrency != null){
      setRateList(data.conversion_rates);
      setRate(data.conversion_rates[toCurrency])
      
      }
      
      
    
    })
    
    
}, [fromCurrency]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
          
        setcurrencyList(Object.keys(data.conversion_rates));
        setfromCurrency(data.base_code);
        setToCurrency(Object.keys(data.conversion_rates)[0]);
        setRateList(data.conversion_rates);
        setRate(data.conversion_rates[toCurrency])
        
        
        
        
      
      })
  }, []);

  
  

  
 

  

  
  


 

  return (
    <div className="card">
      <div className="converter-container">
        <div className="input-fields">
          <div className="from-section">
            <label>
              convert from 
            </label>

            <select
              value={fromCurrency}
              onChange={(e) => {
                setfromCurrency(e.target.value);
                
              }}
            >
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <input
              name="from Currecy"
              type="number"
              value={amountFrom}
              onChange={(event) => {
                setAmountFrom(event.target.value);
                setAmountTo(event.target.value * rate);
              }}
            />
          </div>

          <div className="from-section">
            <label>
              convert to 
            </label>
            <select
              value={toCurrency}
              onChange={(e) => {
                console.log(rateList[toCurrency]);
                setToCurrency(e.target.value);
                console.log("rateList[toCurrency]");
                setRate(rateList[toCurrency]);
                console.log(rateList[toCurrency]);
              }}
            >
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              name="to Currency"
              type="number"
              value={amountTo}
              onChange={(event) => {
                setAmountTo(event.target.value);
                setAmountFrom(event.target.value / rate);
              }}
            />
          </div>
        </div>
        <div>
          <h1>the rate of {fromCurrency} against {toCurrency} is {rate}</h1>
        </div>
        <div>
          <h1>this is soemthing else</h1>
        </div>
      </div>
    </div>
  );
};

export default Converter;
