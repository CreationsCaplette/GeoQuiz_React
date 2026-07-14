import { createContext, useState } from "react";

const GameContext = createContext({
    questionIndex: 0,
    score: 0,
    isGameOver: false,
    goToNextQuestion: () => { },
});

export function GameContextProvider({ children }) {
    const [gameState, setGameState] = useState({
        questionIndex: 0,
        score: 0,
        isGameOver: false,
    });

    function goToNextQuestion(questionCount, pointsToAdd = 0) {
        setGameState((prevState) => ({
            ...prevState,
            questionIndex: prevState.questionIndex + 1,
            score: prevState.score + pointsToAdd,
            isGameOver: prevState.questionIndex + 1 >= questionCount,
        }));
    }

    const gameContext = {
        questionIndex: gameState.questionIndex,
        score: gameState.score,
        isGameOver: gameState.isGameOver,
        goToNextQuestion,
    }

    return (
        <GameContext.Provider value={gameContext}>
            {children}
        </GameContext.Provider>
    );
}

export default GameContext;