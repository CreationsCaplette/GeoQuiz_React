import { useContext } from 'react';
import menuLogo from '../assets/globe_small.svg';
import creationsLogo from '../assets/creations.svg';
import Button from '../components/Button.jsx';
import PreviousButton from '../components/PreviousButton.jsx';
import SceneContext from '../store/SceneContext.jsx';

export default function About() {
    const sceneContext = useContext(SceneContext);

    function onBack() {
        sceneContext.goToMenu();
    }

    return (
        <div className="screen about">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />
            <p className="screen__info">Version: 0.9.0</p>
            <img
                src={creationsLogo}
                className="screen__image screen__image--brand"
                alt="Creations Logo"
            />
            <p className="screen__info">Created by David Caplette</p>
            <p className="screen__info">Designed by Katerina Shuleiko</p>
            <a href="mailto:david.caplette@gmail.com?subject=Geo%20Quiz">
                <Button variant="menu">Contact us</Button>
            </a>
            <PreviousButton onClick={onBack}>
                Go Back
            </PreviousButton>
        </div >
    );
}