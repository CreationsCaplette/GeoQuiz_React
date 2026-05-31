import menuLogo from '../assets/globe_small.svg';

import MenuButton from './MenuButton.jsx';

export default function Menu() {
    return (
        <>
            <h2>Geo Quiz</h2>
            <img src={menuLogo} className="base" width="60" height="60" alt="Globe Logo" />
            <MenuButton>Capitals Game</MenuButton>
            <MenuButton>Reverse Capitals Game</MenuButton>
            <MenuButton>Flags Game</MenuButton>
        </>
    );
}