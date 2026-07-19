import { useContext } from 'react';
import SceneContext from '../store/SceneContext.jsx';
import { SCENES } from "../store/scenes.js";
import faceBad from '../assets/face_bad.svg';
import faceOkay from '../assets/face_okay.svg';
import faceGood from '../assets/face_good.svg';
import faceExcellent from '../assets/face_excellent.svg';
import stars from '../assets/stars.svg';
import PreviousButton from '../components/PreviousButton.jsx';

export default function Menu() {
    const { goToScene } = useContext(SceneContext);

    return (
        <div className="screen game-over">
            <h2 className="game-over-title">Result</h2>
            <p className="game-over-score">Score: 0</p>
            <p className="game-over-best-score">You best score: 0</p>
            <p className="game-over-ecouragement">Learn more!</p>
            <img
                src={faceBad}
                className="screen__image screen__image--small"
                alt="Face Bad"
            />
            <PreviousButton onClick={() => goToScene(SCENES.menu)}>
                Go Back
            </PreviousButton>
        </div>
    );
}