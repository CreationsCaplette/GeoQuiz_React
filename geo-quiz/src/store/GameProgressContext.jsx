import { createContext, useState } from "react";

const GameProgressContext = createContext({
    progress: 'splash',
    goToMenu: () => { },
    goToCapitalsGame: () => { },
});

export function GameProgressContextProvider({ children }) {
    const [gameProgress, setGameProgress] = useState('');

    function goToMenu() {
        setGameProgress('menu');
    }

    function goToCapitalsGame() {
        setGameProgress('capitalsGame');
    }

    const gameProgressContext = {
        progress: gameProgress,
        goToMenu,
        goToCapitalsGame,
    }

    return (
        <GameProgressContext.Provider value={gameProgressContext}>{children}</GameProgressContext.Provider>
    );
}

export default GameProgressContext;