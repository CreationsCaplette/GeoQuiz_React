import React, { useContext } from "react";
import Button from './Button.jsx';
import GameContext from '../store/GameContext';

const Question = React.memo(function Question({
    questionData,
    onChoiceClick: onChoiceClick,
    isAnswered,
    selectedChoice,
}) {
    const { gameType } = useContext(GameContext);

    const getChoiceClass = (choice) => {
        if (!isAnswered || (choice !== selectedChoice && choice !== questionData.answer))
            return "";
        return choice === questionData.answer ? 'positive' : 'negative';
    };

    return (
        <div id="question">
            {gameType === 'flags' ? (
                <img
                    src={questionData.question}
                    alt="Flag"
                    className="game-question-image"
                />
            ) : (
                <h2 className="game-question-text">{questionData.question}</h2>
            )}
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