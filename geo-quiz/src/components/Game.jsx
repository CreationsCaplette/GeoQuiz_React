import { useContext, useState } from 'react';
import useHttp from "../hooks/useHttp";
import Progress from './Progress.jsx';
import Score from './Score.jsx';
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
        gameContext.goToNextQuestion(questionData.length);
    }

    function handleTimeUp() {
        setTimeUp(true);
    }

    const currentQuestion = questionData?.[gameContext.questionIndex];
    if (!currentQuestion) return null;

    if (timeUp) {
        //return <p className="center">Time is up!</p>
    }

    if (gameContext.isGameOver) {
        return <p className="center">Game Over!</p>
    }

    return (
        <>
            <Score />
            <Progress
                progressIndex={gameContext.questionIndex + 1}
                questionCount={questionData.length}
            />
            <Timer
                key={gameContext.questionIndex}
                initialTime={10}
                onTimeUp={handleTimeUp}
            />
            <Question id="question"
                questionData={currentQuestion}
                onNext={handleGoToNextQuestion}
            />
        </>
    );
}