import { useContext } from 'react';

import useHttp from "../hooks/useHttp";

import Question from './Question.jsx'
import Button from './Button.jsx';

import GameContext from '../store/GameContext';

const requestConfig = {};

export default function Game() {
    const gameContext = useContext(GameContext);

    const {
        data: questionData,
        isLoading,
        error
    } = useHttp('https://localhost:7266/game/capitals', requestConfig, []);

    if (error) {
        return <Error title="Failed to fetch countries data" message={error} />;
    }

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    function handleGoToNextQuestion() {
        gameContext.goToNextQuestion();
    }

    const currentQuestion = questionData?.[gameContext.questionIndex];
    if (!currentQuestion) return null;

    return (
        <>
            <ul id="question">
                <Question
                    questionData={currentQuestion}
                    onNext={handleGoToNextQuestion} />
            </ul >
        </>
    );
}