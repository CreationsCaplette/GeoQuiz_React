import { createContext, useState } from "react";

const SceneContext = createContext({
    scene: 'splash',
    goToMenu: () => { },
    goToCapitalsGame: () => { },
    goToAbout: () => { },
});

export function SceneContextProvider({ children }) {
    const [scene, setScene] = useState('');

    function goToMenu() {
        setScene('menu');
    }

    function goToCapitalsGame() {
        setScene('capitalsGame');
    }

    function goToAbout() {
        setScene('about');
    }

    const sceneContext = {
        scene: scene,
        goToMenu,
        goToCapitalsGame,
        goToAbout,
    }

    return (
        <SceneContext.Provider value={sceneContext}>{children}</SceneContext.Provider>
    );
}

export default SceneContext;