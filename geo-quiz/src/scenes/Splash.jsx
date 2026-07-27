import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SCENES } from '../store/scenes.js';
import { sceneActions } from '../store/scene-slice.jsx';

import titleLogo from '../assets/globe.svg';
import creationsLogo from '../assets/creations.svg';

const TIMEOUT = 3000;

export default function Splash() {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => dispatch(sceneActions.goToScene(SCENES.menu)), TIMEOUT);

        return () => { clearTimeout(timer) };
    }, [dispatch]);


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