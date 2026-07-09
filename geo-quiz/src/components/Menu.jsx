import { useContext } from 'react';

import menuLogo from '../assets/globe_small.svg';

import GameProgressContext from '../store/GameProgressContext';

import Button from './Button.jsx';

export default function Menu() {
    const gameProgressContext = useContext(GameProgressContext)

    function handleCapitalsGame() {
        gameProgressContext.goToCapitalsGame();
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