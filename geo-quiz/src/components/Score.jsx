import React from "react";

const Score = React.memo(function Score({ score = 0 }) {
    return <div id="score">{score}</div>;
});

export default Score