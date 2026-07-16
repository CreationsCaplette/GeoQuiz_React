import React from "react";

const Score = React.memo(function Score({ score = 0 }) {
    return <div className="game-controls">{score}</div>;
});

export default Score