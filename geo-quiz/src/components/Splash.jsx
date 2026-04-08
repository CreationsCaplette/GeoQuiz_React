import { useEffect } from 'react';

import titleLogo from '../assets/globe.svg';
import creationsLogo from '../assets/creations.svg';

const TIMEOUT = 2500;

export default function Splash({ onTimeout }) {
    useEffect(() => {
        const timer = setTimeout(onTimeout, TIMEOUT);

        return () => { clearTimeout(timer) };
    }, [onTimeout]);


    return (
        <>
            <h1>Geo Quiz</h1>
            <img src={titleLogo} className="base" width="291" height="315" alt="Globe Logo" />
            <img src={creationsLogo} className="base" width="134" height="75" alt="Globe Logo" />
        </>
    );
}