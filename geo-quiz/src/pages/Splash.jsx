import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import titleLogo from '../assets/globe.svg';
import creationsLogo from '../assets/creations.svg';

const TIMEOUT = 3000;

export default function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() =>
            navigate('/menu'), TIMEOUT);

        return () => { clearTimeout(timer) };
    }, [navigate]);


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