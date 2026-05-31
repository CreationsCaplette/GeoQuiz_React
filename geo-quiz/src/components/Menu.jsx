import { useContext } from 'react';

import menuLogo from '../assets/globe_small.svg';

import GameProgressContext from '../store/GameProgressContext';

import MenuButton from './MenuButton.jsx';

export default function Menu() {
    const gameProgressContext = useContext(GameProgressContext)

    function handleCapitalsGame() {
        gameProgressContext.goToCapitalsGame();
    }

    return (
        <>
            <h2>Geo Quiz</h2>
            <img src={menuLogo} className="base" width="60" height="60" alt="Globe Logo" />
            <MenuButton onClick={handleCapitalsGame}>Capitals Game</MenuButton>
            <MenuButton>Reverse Capitals Game</MenuButton>
            <MenuButton>Flags Game</MenuButton>
        </>
    );
}