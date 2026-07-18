import React from "react";
import Button from './Button.jsx';

const Question = React.memo(function Question({
    questionData,
    onChoiceClick: onChoiceClick,
    isAnswered,
    selectedChoice,
    isCorrect,
}) {
    const getChoiceClass = (choice) => {
        if (!isAnswered || choice !== selectedChoice)
            return "";
        return isCorrect ? 'positive' : 'negative';
    };

    return (
        <ul id="question">
            <h2 className="game-question">{questionData.question}</h2>
            {questionData.choices.map((choice) => (
                <Button
                    key={questionData.question + '-' + choice}
                    variant='game'
                    className={getChoiceClass(choice)}
                    disabled={isAnswered}
                    onClick={() => onChoiceClick(choice)}
                >
                    {choice}
                </Button>
            ))}
        </ul >
    );
});

export default Question