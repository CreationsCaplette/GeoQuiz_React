import { useEffect, useContext } from 'react';

import titleLogo from '../assets/globe.svg';
import creationsLogo from '../assets/creations.svg';
import SceneContext from '../store/SceneContext';

const TIMEOUT = 3000;

export default function Splash() {
    const sceneContext = useContext(SceneContext)

    useEffect(() => {
        const timer = setTimeout(sceneContext.goToMenu, TIMEOUT);

        return () => { clearTimeout(timer) };
    });


    return (
        <>
            <h1>GEO QUIZ</h1>
            <img src={titleLogo} className="base" width="291" height="315" alt="Globe Logo" />
            <img src={creationsLogo} className="base" width="134" height="75" alt="Globe Logo" />
        </>
    );
}