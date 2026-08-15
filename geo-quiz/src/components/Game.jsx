import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { gameActions } from '../store/game-slice.jsx';

import Progress from '../components/Progress.jsx';
import Score from '../components/Score.jsx';
import Timer from '../components/Timer.jsx';
import Question from '../components/Question.jsx';
import BackButton from '../components/BackButton.jsx';
import NextButton from '../components/NextButton.jsx';
import Error from '../components/Error.jsx';

export default function Game(data) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(gameActions.startGame(data.gameData));
    }, [dispatch, data]);

    const {
        questions,
        score,
        isLoading,
        isLastQuestion,
        isGameOver,
        selectedChoice,
        hasAnswered,
        questionIndex,
        gameType,
    } = useSelector(state => state.game);

    const remainingTimeMs = useRef(10000);

    useEffect(() => {
        if (isGameOver) {
            navigate('/gameOver')
        }
    }, [isGameOver, navigate]);

    if (isLoading) {
        return <p className="center">Fetching countries data...</p>
    }

    const currentQuestion = questions?.[questionIndex];
    if (!currentQuestion) return null;

    return (
        <div className="screen">
            <div className="game-header">
                <BackButton toLink="/menu" preventable={true}>Go Back</BackButton>
            </div>

            <div className="game-status">
                <div className="game-status__score">
                    <Score score={score} />
                </div>
                <div className="game-status__progress">
                    <Progress
                        progressIndex={questionIndex + 1}
                        questionCount={questions.length}
                    />
                </div>
            </div>

            <Timer
                key={questionIndex}
                initialTime={10000}
                onTimeUp={() => dispatch(gameActions.handleAnswer({ choice: null, remainingTimeMs: 0 }))}
                onTimeChange={(timeLeft) => remainingTimeMs.current = timeLeft}
                isPaused={hasAnswered}
            />

            <Question
                questionData={currentQuestion}
                gameType={gameType}
                onChoiceClick={(choice) => dispatch(gameActions.handleAnswer({ selectedChoice: choice, remainingTimeMs: remainingTimeMs.current }))}
                isAnswered={hasAnswered}
                selectedChoice={selectedChoice}
            />
            <NextButton
                onClick={() => dispatch(gameActions.goToNextQuestion())}
                isVisible={hasAnswered}
            >
                {isLastQuestion ? 'See your results' : 'Next Question'}
            </NextButton>
        </div>
    );
}