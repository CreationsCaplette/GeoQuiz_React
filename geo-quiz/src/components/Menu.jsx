import { useContext } from 'react';

import menuLogo from '../assets/globe_small.svg';

import SceneContext from '../store/SceneContext.jsx';

import Button from './Button.jsx';

export default function Menu() {
    const sceneContext = useContext(SceneContext);

    function handleCapitalsGame() {
        sceneContext.goToCapitalsGame();
    }

    return (
        <div className="screen">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />

            <Button variant="menu" onClick={handleCapitalsGame}>
                Capitals Game
            </Button>
            <Button variant="menu">Reverse Capitals Game</Button>
            <Button variant="menu">Flags Game</Button>
        </div>
    );
}