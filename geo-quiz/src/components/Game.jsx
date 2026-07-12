import { useContext, useState } from 'react';
import useHttp from "../hooks/useHttp";
import Timer from './Timer.jsx';
import Question from './Question.jsx';
import GameContext from '../store/GameContext';

const requestConfig = {};

export default function Game() {
    const gameContext = useContext(GameContext);
    const [timeUp, setTimeUp] = useState(false);

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

    function handleTimeUp() {
        setTimeUp(true);
    }

    const currentQuestion = questionData?.[gameContext.questionIndex];
    if (!currentQuestion) return null;

    if (timeUp) {
        return <p className="center">Time is up!</p>
    }

    return (
        <>
            <div id="score">42</div>
            <div id="progress">1/10</div>
            <Timer
                key={gameContext.questionIndex}
                initialTime={30}
                onTimeUp={handleTimeUp}
            />
            <Question id="question"
                questionData={currentQuestion}
                onNext={handleGoToNextQuestion}
            />
        </>
    );
}