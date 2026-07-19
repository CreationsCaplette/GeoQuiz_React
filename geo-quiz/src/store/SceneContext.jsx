import { createContext, useCallback, useMemo, useState } from "react";
import { SCENES } from "./scenes.js";

const SceneContext = createContext({
    scene: SCENES.splash,
    goToScene: () => { },
});

export function SceneContextProvider({ children }) {
    const [scene, setScene] = useState(SCENES.splash);

    const goToScene = useCallback((nextScene) => {
        setScene(nextScene);
    }, []);

    const value = useMemo(() => ({ scene, goToScene }), [scene, goToScene]);

    return (
        <SceneContext.Provider value={value}>{children}</SceneContext.Provider>
    );
}

export default SceneContext;