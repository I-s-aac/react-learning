"use client";

import React, { ChangeEvent, useState, useEffect } from "react";

type props = {};

const TipCalculator: React.FC<props> = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);

  const tipAmount =
    Math.round((totalPrice * (1 + tipPercentage / 100) - totalPrice) * 100) /
    100;
  const totalWithTip = totalPrice + tipAmount;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Tip Calculator</h1>
      <div>
        <label htmlFor="total">Enter Total Price: </label>
        <input
          name="total"
          id="total"
          type="number"
          min="0"
          onChange={(event) => setTotalPrice(parseFloat(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="percentage">Enter Tip Percentage: </label>
        <input
          name="percentage"
          id="percentage"
          type="number"
          min="1"
          max="100"
          onChange={(event) => setTipPercentage(parseFloat(event.target.value))}
        />
      </div>
      <div>Tip Amount: {tipAmount}</div>
      <div>Total With Tip: {totalWithTip}</div>
    </div>
  );
};

export default TipCalculator;
