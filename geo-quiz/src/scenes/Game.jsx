import { useContext, useEffect, useRef } from 'react';
import SceneContext from '../store/SceneContext.jsx';
import { SCENES } from "../store/scenes.js";
import Progress from '../components/Progress.jsx';
import Score from '../components/Score.jsx';
import Timer from '../components/Timer.jsx';
import Question from '../components/Question.jsx';
import NextButton from '../components/NextButton.jsx';
import GameContext from '../store/GameContext.jsx';
import Error from '../components/Error.jsx';

export default function Game() {
    const { goToScene } = useContext(SceneContext);

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
        refetchQuestions,
    } = useContext(GameContext);

    const remainingTimeMs = useRef(10000);

    useEffect(() => {
        if (isGameOver) {
            goToScene(SCENES.gameOver);
        }
    }, [isGameOver, goToScene]);

    if (error) {
        const errorMessage = error instanceof Error ? error.message : error;

        return <Error
            title="Failed to fetch countries data"
            message={errorMessage}
            onAccept={() => refetchQuestions()}
            onAcceptText='Try again'
            onDecline={() => goToScene(SCENES.menu)}
            onDeclineText='Back to menu' />
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
                isPaused={hasAnswered}
            />

            <Question
                questionData={currentQuestion}
                onChoiceClick={onAnswer}
                isAnswered={hasAnswered}
                selectedChoice={selectedChoice}
            />
            <NextButton
                onClick={onNextQuestion}
                isVisible={hasAnswered}
            >
                Next Question
            </NextButton>
        </div>
    );
}