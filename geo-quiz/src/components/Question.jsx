import React from "react";
import Button from './Button.jsx';

const Question = React.memo(function Question({
    questionData,
    onChoiceClick: onChoiceClick,
    isAnswered,
    selectedChoice,
}) {
    const getChoiceClass = (choice) => {
        if (!isAnswered || (choice !== selectedChoice && choice !== questionData.answer))
            return "";
        return choice === questionData.answer ? 'positive' : 'negative';
    };

    return (
        <div id="question">
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
        </div >
    );
});

export default Question