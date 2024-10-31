import React from "react";

type BoardTileProps = {
  children?: React.ReactNode;
  color?: string;
};

const BoardTile: React.FC<BoardTileProps> = ({ children, color }) => {
  return (
    <div
      style={{
        backgroundColor: color || "black", // default color
        // height: "50px",
        // width: "50px",
        border: "1px solid white",
      }}
    >
      {children}
    </div>
  );
};

export default BoardTile;
