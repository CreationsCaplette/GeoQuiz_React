import { createContext, useState } from "react";

const GameContext = createContext({
    questionIndex: 0,
    goToNextQuestion: () => { },
});

export function GameContextProvider({ children }) {
    const [gameState, setGameState] = useState({ questionIndex: 0 });

    function goToNextQuestion() {
        setGameState((prevState) => ({
            questionIndex: prevState.questionIndex + 1
        }));
    }

    const gameContext = {
        questionIndex: gameState.questionIndex,
        goToNextQuestion,
    }

    return (
        <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
    );
}

export default GameContext;