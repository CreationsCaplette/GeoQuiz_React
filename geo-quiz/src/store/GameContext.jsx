import { createContext, useState } from "react";

const GameContext = createContext({
    questionIndex: 0,
    isGameOver: false,
    goToNextQuestion: () => { },
});

export function GameContextProvider({ children }) {
    const [gameState, setGameState] = useState({
        questionIndex: 0,
    });

    function goToNextQuestion(questionCount) {
        if (gameState.questionIndex + 1 >= questionCount) {
            setGameState((prevState) => ({
                ...prevState,
                isGameOver: true
            }));
            return;
        }

        setGameState((prevState) => ({
            ...prevState,
            questionIndex: prevState.questionIndex + 1
        }));
    }

    const gameContext = {
        questionIndex: gameState.questionIndex,
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