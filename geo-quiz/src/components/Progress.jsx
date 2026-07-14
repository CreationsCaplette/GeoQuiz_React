import React from "react";

const Progress = React.memo(function Progress({ progressIndex, questionCount }) {
    const formattedProgress = `${progressIndex}/${questionCount}`;

    return <div id="progress">{formattedProgress}</div>;
});

export default Progress