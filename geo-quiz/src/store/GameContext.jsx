import { createContext, useState } from "react";
import useHttp from "../hooks/useHttp";

const GameContext = createContext({
    questions: [],
    questionIndex: 0,
    score: 0,
    isLoading: false,
    isGameOver: false,
    error: null,
    goToNextQuestion: () => { },
});

export function GameContextProvider({ children }) {
    const [gameState, setGameState] = useState({
        questionIndex: 0,
        score: 0,
        isGameOver: false,
    });

    const { data: questions, isLoading, error } = useHttp(
        'https://localhost:7266/game/capitals',
        {},
        []
    );

    function goToNextQuestion(pointsToAdd = 0) {
        setGameState((prevState) => ({
            ...prevState,
            questionIndex: prevState.questionIndex + 1,
            score: prevState.score + pointsToAdd,
            isGameOver: prevState.questionIndex + 1 >= questions.length,
        }));
    }

    const gameContext = {
        questions,
        questionIndex: gameState.questionIndex,
        score: gameState.score,
        isLoading,
        isGameOver: gameState.isGameOver,
        error,
        goToNextQuestion,
    }

    return (
        <GameContext.Provider value={gameContext}>
            {children}
        </GameContext.Provider>
    );
}

export default GameContext;