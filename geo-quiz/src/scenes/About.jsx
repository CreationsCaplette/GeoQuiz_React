import menuLogo from '../assets/globe_small.svg';

export default function About() {
    return (
        <div className="screen">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />
        </div>
    );
}