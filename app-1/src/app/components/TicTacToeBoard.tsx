// components/TicTacToeBoard.tsx
"use client";
import { useState } from "react";
import TicTacToeTile from "./TicTacToeTile";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gridTemplateRows: "repeat(3, 100px)",
  gap: "10px",
  backgroundColor: "black",
};

const TicTacToeBoard = () => {
  const [tiles, setTiles] = useState<(string | null)[]>(Array(9).fill(null));

  const handleTileClick = (index: number, symbol: string) => {
    const newTiles = [...tiles];
    newTiles[index] = symbol;
    setTiles(newTiles);
  };

  return (
    <div style={style}>
      {tiles.map((tile, index) => (
        <TicTacToeTile
          key={index}
          index={index}
          symbol={tile}
          onClick={handleTileClick}
        />
      ))}
    </div>
  );
};

export default TicTacToeBoard;
