// components/TicTacToeTile.tsx
"use client";
import React, { MouseEvent } from "react";
import TicTacToeX from "./TicTacToeX";
import TicTacToeCircle from "./TicTacToeCircle";

const style = {
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface Props {
  index: number;
  symbol: string | null;
  onClick: (index: number, symbol: string) => void;
}

const TicTacToeTile: React.FC<Props> = ({ index, symbol, onClick }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const newSymbol = event.type === "click" ? "X" : "O";
    onClick(index, newSymbol);
  };

  return (
    <div style={style} onClick={handleClick} onContextMenu={handleClick}>
      {symbol === "X" ? (
        <TicTacToeX />
      ) : symbol === "O" ? (
        <TicTacToeCircle />
      ) : null}
    </div>
  );
};

export default TicTacToeTile;
