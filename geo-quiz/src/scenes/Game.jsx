import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

import { SCENES } from "../store/scenes.js";
import { sceneActions } from '../store/scene-slice.jsx';
import { gameActions } from '../store/game-slice.jsx';
import { fetchGameData } from '../store/game-actions.jsx';

import Progress from '../components/Progress.jsx';
import Score from '../components/Score.jsx';
import Timer from '../components/Timer.jsx';
import Question from '../components/Question.jsx';
import NextButton from '../components/NextButton.jsx';
import Error from '../components/Error.jsx';

export default function Game() {
    const dispatch = useDispatch();

    const data = useLoaderData();

    useEffect(() => {
        dispatch(gameActions.resetGame());
        dispatch(gameActions.setQuestions(data));
    }, [dispatch, data]);


    const {
        questions,
        score,
        isLoading,
        isGameOver,
        error,
        selectedChoice,
        hasAnswered,
        questionIndex,
        gameType,
    } = useSelector(state => state.game);

    const remainingTimeMs = useRef(10000);

    useEffect(() => {
        if (isGameOver) {
            dispatch(sceneActions.goToScene(SCENES.gameOver));
        }
    }, [isGameOver, dispatch]);

    if (error) {
        const errorMessage = error instanceof Error ? error.message : error;
        return <Error
            title="Failed to fetch countries data"
            message={errorMessage}
            onAccept={() => dispatch(fetchGameData(gameType))}
            onAcceptText='Try again'
            onDecline={() => dispatch(sceneActions.goToScene(SCENES.menu))}
            onDeclineText='Back to menu' />
    }

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    function onNextQuestion() {
        dispatch(gameActions.goToNextQuestion());
    }

    function onAnswer(choice) {
        dispatch(gameActions.handleAnswer({
            selectedChoice: choice,
            remainingTimeMs: remainingTimeMs.current,
        }));
    }

    function handleTimeUp() {
        dispatch(gameActions.handleAnswer({
            choice: null,
            remainingTimeMs: 0,
        }));
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
                gameType={gameType}
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