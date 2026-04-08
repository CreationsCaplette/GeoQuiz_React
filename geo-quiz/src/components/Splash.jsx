import { useEffect, useContext } from 'react';

import titleLogo from '../assets/globe.svg';
import creationsLogo from '../assets/creations.svg';
import GameProgressContext from '../store/GameProgressContext';

const TIMEOUT = 3000;

export default function Splash() {
    const gameProgressContext = useContext(GameProgressContext)

    useEffect(() => {
        const timer = setTimeout(gameProgressContext.goToMenu, TIMEOUT);

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