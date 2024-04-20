/** @format */

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const players = [
    "Rebecca",
    "Elle",
    "Olivia",
    "Willow",
    "Josie",
    "Remington",
    "Madelyn",
    "Emma",
    "Josie",
    "Sydney",
  ];

  const [battingOrder, setBattingOrder] = useState([]);

  const createBattingOrder = () => {
    const randomizedOrder = [...players].sort(() => Math.random() - 0.5);
    setBattingOrder(randomizedOrder);
  };

  return (
    <div className='App'>
      <h1>The Purple Owls</h1>
      <button onClick={createBattingOrder}>Create Batting Order</button>
      <ul>
        {battingOrder.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
