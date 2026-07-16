import { useContext, useRef, useState } from 'react';
import Progress from './Progress.jsx';
import Score from './Score.jsx';
import Timer from './Timer.jsx';
import Question from './Question.jsx';
import GameContext from '../store/GameContext';

export default function Game() {
    const {
        questions,
        questionIndex,
        score,
        isLoading,
        isGameOver,
        error,
        goToNextQuestion,
    } = useContext(GameContext);

    const [timeUp, setTimeUp] = useState(false);
    const remainingTimeMs = useRef(10000);

    if (error) {
        return <Error title="Failed to fetch countries data" message={error} />;
    }

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    function handleGoToNextQuestion() {
        goToNextQuestion(remainingTimeMs.current);
    }

    function handleTimeUp() {
        setTimeUp(true);
    }

    function handleTimeChange(timeLeft) {
        remainingTimeMs.current = timeLeft;
    }

    const currentQuestion = questions?.[questionIndex];
    if (!currentQuestion) return null;

    if (timeUp) {
        //return <p className="center">Time is up!</p>
    }

    if (isGameOver) {
        return <p className="center">Game Over!</p>
    }

    return (
        <div className="game-layout">
            <div className="game-header">
                <div className="game-header__score">
                    <Score className="game-header__score" score={score} />
                </div>
                <div className="game-header__progress">
                    <Progress
                        progressIndex={questionIndex + 1}
                        questionCount={questions.length}
                    />
                </div>
            </div>



            <Timer
                key={questionIndex}
                initialTime={10000}
                onTimeUp={handleTimeUp}
                onTimeChange={handleTimeChange}
            />
            <Question id="question"
                questionData={currentQuestion}
                onNext={handleGoToNextQuestion}
            />
        </div>
    );
}