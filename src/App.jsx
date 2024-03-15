import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [array, setArray] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState(true);

  const winner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningCombinations) {
      const [a, b, c] = condition;
      if (array[a] === array[b] && array[b] === array[c] && array[a] !== null) {
        return array[a];
      }
    }
    return null;
  };

  const isWinner = winner();

  const handleSubmit = (index) => {
    if (array[index] !== null || isWinner !== null) {
      return;
    }
    const newArray = [...array];
    newArray[index] = strike ? "X" : "O";
    setArray(newArray);
    setStrike(!strike);
  };

  const ifDraw = array.every((value) => value != null);

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="column">
        <div className="row" onClick={() => handleSubmit(0)}>
          {array[0]}
        </div>
        <div className="row" onClick={() => handleSubmit(1)}>
          {array[1]}
        </div>
        <div className="row" onClick={() => handleSubmit(2)}>
          {array[2]}
        </div>
      </div>
      <div className="column">
        <div className="row" onClick={() => handleSubmit(3)}>
          {array[3]}
        </div>
        <div className="row" onClick={() => handleSubmit(4)}>
          {array[4]}
        </div>
        <div className="row" onClick={() => handleSubmit(5)}>
          {array[5]}
        </div>
      </div>
      <div className="column">
        <div className="row" onClick={() => handleSubmit(6)}>
          {array[6]}
        </div>
        <div className="row" onClick={() => handleSubmit(7)}>
          {array[7]}
        </div>
        <div className="row" onClick={() => handleSubmit(8)}>
          {array[8]}
        </div>
      </div>
      {isWinner !== null ? (
        <>
          <h3>{isWinner} is the winner</h3>
          <button
            className="play-again"
            onClick={() => setArray(Array(9).fill(null))}
          >
            Play Again
          </button>
        </>
      ) : (
        <></>
      )}

      {!isWinner && ifDraw ? (
        <>
          <h3>Draw</h3>
          <button onClick={() => setArray(Array(9).fill(null))}>
            Play Again
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
