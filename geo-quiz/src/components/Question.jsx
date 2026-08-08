import React from "react";
import Button from './Button.jsx';

function QuestionDisplay({ questionData, gameType }) {
    if (gameType === 'flags') {
        return <img src={questionData.question} alt="Flag" className="game-question-image" />;
    }
    return <h2 className="game-question-text">{questionData.question}</h2>;
}

const Question = React.memo(function Question({
    questionData,
    gameType,
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
            <QuestionDisplay questionData={questionData} gameType={gameType} />
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