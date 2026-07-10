import { createContext, useState } from "react";

const SceneContext = createContext({
    scene: 'splash',
    goToMenu: () => { },
    goToCapitalsGame: () => { },
});

export function SceneContextProvider({ children }) {
    const [scene, setScene] = useState('');

    function goToMenu() {
        setScene('menu');
    }

    function goToCapitalsGame() {
        setScene('capitalsGame');
    }

    const sceneContext = {
        scene: scene,
        goToMenu,
        goToCapitalsGame,
    }

    return (
        <SceneContext.Provider value={sceneContext}>{children}</SceneContext.Provider>
    );
}

export default SceneContext;