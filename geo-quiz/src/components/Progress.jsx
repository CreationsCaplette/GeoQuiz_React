import React from "react";

const Progress = React.memo(function Progress({ progressIndex, questionCount }) {
    const formattedProgress = `${progressIndex}/${questionCount}`;

    return <div className="game-controls">{formattedProgress}</div>;
});

export default Progress