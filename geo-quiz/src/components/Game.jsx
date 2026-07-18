import { useContext, useRef } from 'react';
import Progress from './Progress.jsx';
import Score from './Score.jsx';
import Timer from './Timer.jsx';
import Question from './Question.jsx';
import NextQuestionButton from './NextQuestionButton.jsx';
import GameContext from '../store/GameContext';

export default function Game() {
    const {
        questions,
        questionIndex,
        score,
        isLoading,
        isGameOver,
        error,
        selectedChoice,
        hasAnswered,
        handleAnswer,
        goToNextQuestion,
    } = useContext(GameContext);

    const remainingTimeMs = useRef(10000);

    if (error) {
        return <Error title="Failed to fetch countries data" message={error} />;
    }

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    function onNextQuestion() {
        goToNextQuestion();
    }

    function onAnswer(choice) {
        handleAnswer(choice, remainingTimeMs.current);
    }

    function handleTimeUp() {
        handleAnswer();
    }

    function handleTimeChange(timeLeft) {
        remainingTimeMs.current = timeLeft;
    }

    const currentQuestion = questions?.[questionIndex];
    if (!currentQuestion) return null;

    if (isGameOver) {
        //return <p className="center">Game Over!</p>
    }

    return (
        <div className="screen">
            <div className="game-header">
                <div className="game-header__score">
                    <Score score={score} />
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

            <Question
                questionData={currentQuestion}
                onChoiceClick={onAnswer}
                isAnswered={hasAnswered}
                selectedChoice={selectedChoice}
            />
            <NextQuestionButton
                onClick={onNextQuestion}
                isVisible={hasAnswered}
            />
        </div>
    );
}