import React from "react";
import Button from './Button.jsx';

const Question = React.memo(function Question({ questionData, onNext: onClick }) {
    return (
        <ul id="question">
            <h2>{questionData.question}</h2>
            {questionData.choices.map((choice) => (
                <Button
                    key={questionData.question + '-' + choice}
                    variant='game'
                    onClick={onClick}>
                    {choice}
                </Button>
            ))}
        </ul >
    );
});

export default Question