import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

// const currencies = {
//   USD: { CZK: 23.823 },
//   EUR: { CZK: 24.74 },
//   GBP: { CZK: 29.067 },
// };

const Rate = ({ from }) => {
  const [rate, setRate] = useState('XD');

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) => response.json())
      .then((data) => setRate(data.rates.CZK));
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};

export default Rate;
