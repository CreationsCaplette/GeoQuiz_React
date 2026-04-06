import { createContext, useState } from "react";

const GameProgressContext = createContext({
    progress: '',
    goToMenu: () => { },
});

export function GameProgressContextProvider({ children }) {
    const [gameProgress, setGameProgress] = useState('');

    function goToMenu() {
        setGameProgress('menu');
    }

    const gameProgressContext = {
        progress: gameProgress,
        goToMenu,
    }

    return (
        <GameProgressContext.Provider value={gameProgressContext}>{children}</GameProgressContext.Provider>
    );
}

export default GameProgressContext;