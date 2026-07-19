import { useContext } from 'react';
import SceneContext from '../store/SceneContext.jsx';
import { SCENES } from "../store/scenes.js";
import PreviousButton from '../components/PreviousButton.jsx';

export default function Menu() {
    const { goToScene } = useContext(SceneContext);

    return (
        <div className="screen">
            <h3 className="screen__subtitle">Game Over</h3>
            <PreviousButton onClick={() => goToScene(SCENES.menu)}>
                Go Back
            </PreviousButton>
        </div>
    );
}