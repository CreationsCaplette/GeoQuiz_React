import { Link } from 'react-router-dom';

import menuLogo from '../assets/globe_small.svg';
import Button from '../components/Button.jsx';

export default function Menu() {
    return (
        <div className="screen">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />

            <Link className="button menu" to="/capitals">Capitals</Link>
            <Link className="button menu" to="/capitals_reverse">Capitals Reverse</Link>
            <Link className="button menu" to="/flags">Flags</Link>
            <Link className="button text" to="/about">About</Link>
        </div>
    );
}