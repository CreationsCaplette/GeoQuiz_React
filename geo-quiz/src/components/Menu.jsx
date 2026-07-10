import { useContext } from 'react';

import menuLogo from '../assets/globe_small.svg';

import SceneContext from '../store/SceneContext.jsx';

import Button from './Button.jsx';

export default function Menu() {
    const sceneContext = useContext(SceneContext)

    function handleCapitalsGame() {
        sceneContext.goToCapitalsGame();
    }

    return (
        <ul id="menu">
            <h3>Geo Quiz</h3>
            <img src={menuLogo} className="base" width="60" height="60" alt="Globe Logo" />
            <Button variant='menu' onClick={handleCapitalsGame}>Capitals Game</Button>
            <Button variant='menu' >Reverse Capitals Game</Button>
            <Button variant='menu' >Flags Game</Button>
        </ul>
    );
}