import { useDispatch } from 'react-redux';

import { SCENES } from "../store/scenes.js";
import { sceneActions } from '../store/scene-slice.jsx';

import menuLogo from '../assets/globe_small.svg';
import Button from '../components/Button.jsx';

export default function Menu() {
    const dispatch = useDispatch();

    return (
        <div className="screen">
            <h3 className="screen__subtitle">Geo Quiz</h3>
            <img
                src={menuLogo}
                className="screen__image screen__image--small"
                alt="Globe Logo"
            />

            <Button variant="menu" onClick={() => dispatch(sceneActions.goToScene(SCENES.capitalsGame))}>
                Capitals
            </Button>
            <Button variant="menu" onClick={() => dispatch(sceneActions.goToScene(SCENES.capitalsReverseGame))}>
                Capitals Reverse
            </Button>
            <Button variant="menu" onClick={() => dispatch(sceneActions.goToScene(SCENES.flagsGame))}>
                Flags
            </Button>
            <Button variant="text" onClick={() => dispatch(sceneActions.goToScene(SCENES.about))}>
                About
            </Button>
        </div>
    );
}