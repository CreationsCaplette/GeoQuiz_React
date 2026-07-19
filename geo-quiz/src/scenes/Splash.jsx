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
        <div className="screen">
            <h1 className="screen__title">GEO QUIZ</h1>
            <img
                src={titleLogo}
                className="screen__image screen__image--hero"
                alt="Globe Logo"
            />
            <img
                src={creationsLogo}
                className="screen__image screen__image--brand"
                alt="Creations Logo"
            />
        </div>
    );
}