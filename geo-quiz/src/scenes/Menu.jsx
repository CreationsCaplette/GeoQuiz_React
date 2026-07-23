import { useContext } from 'react';
import menuLogo from '../assets/globe_small.svg';
import SceneContext from '../store/SceneContext.jsx';
import { SCENES } from "../store/scenes.js";
import Button from '../components/Button.jsx';

export default function Menu() {
    const { goToScene } = useContext(SceneContext);

    return (
        <div className="screen">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />

            <Button variant="menu" onClick={() => goToScene(SCENES.capitalsGame)}>
                Capitals
            </Button>
            <Button variant="menu" onClick={() => goToScene(SCENES.capitalsReverseGame)}>
                Capitals Reverse
            </Button>
            <Button variant="menu" onClick={() => goToScene(SCENES.flagsGame)}>
                Flags
            </Button>
            <Button variant="text" onClick={() => goToScene(SCENES.about)}>
                About
            </Button>
        </div>
    );
}