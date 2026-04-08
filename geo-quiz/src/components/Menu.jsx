import menuLogo from '../assets/globe_small.svg';

export default function Menu() {
    return (
        <>
            <h2>Geo Quiz</h2>
            <img src={menuLogo} className="base" width="60" height="60" alt="Globe Logo" />
            <button>Capitals Game</button>
            <button>Reverse Capitals Game</button>
            <button>Flags Game</button>
        </>
    );
}